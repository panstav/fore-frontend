import api from 'services/xhr';
import localstorage from 'services/localstorage';

import fifo from 'lib/fifo';

import { localStorageKeys } from 'constants';

export default {

	async getClaimDetail({ claims }, id) {
		const claim = await api.getClaimDetail({ id });
		claim.isDetailed = true;

		const index = claims.findIndex((claim) => claim.id === id);
		if (index >= 0) {
			claims[index] = claim;
		} else {
			claims.push(claim);
		}

		return { claims };
	},

	trackClaimView({ claims }, { claimId }) {

		const claim = claims.find((claim) => claim.id === claimId);
		const newViewedClaim = {
			id: claimId,
			content: claim.content,
			authorId: claim.author.id,
			spaceId: claim.spaceId,
		};

		// load recently connected claims from localStorage
		const recentlyViewedClaims = localstorage.get(localStorageKeys.recentlyViewedClaims, []);

		// bump existing / add claim to the list
		fifo(recentlyViewedClaims, newViewedClaim, {
			max: 5,
			compare: (claim) => claim.id === claimId
		});

		// save recently connected claims to localStorage
		localstorage.set(localStorageKeys.recentlyViewedClaims, recentlyViewedClaims);
		return {};
	},

	async deleteClaim({ claims }, claimId) {

		await api.deleteClaim({ claimId });

		const recentlyViewedClaims = localstorage.get(localStorageKeys.recentlyViewedClaims, []);
		const recentlyViewedClaimIndex = recentlyViewedClaims.findIndex((claim) => claim.id === claimId);
		if (~recentlyViewedClaimIndex) {
			recentlyViewedClaims.splice(recentlyViewedClaimIndex, 1);
			localstorage.set(localStorageKeys.recentlyViewedClaims, recentlyViewedClaims);
		}

		const recentlyConnectedClaims = localstorage.get(localStorageKeys.recentlyConnectedClaims, []);
		const recentlyConnectedClaimIndex = recentlyConnectedClaims.findIndex((claim) => claim.id === claimId);
		if (~recentlyConnectedClaimIndex) {
			recentlyConnectedClaims.splice(recentlyConnectedClaimIndex, 1);
			localstorage.set(localStorageKeys.recentlyConnectedClaims, recentlyConnectedClaims);
		}

		const claimIndex = claims.findIndex((claim) => claim.id === claimId);
		if (~claimIndex) {
			claims.splice(claimIndex, 1);
		}

		const cleanClaims = claims.map((claim) => {
			if (!claim.isDetailed) return claim;

			const claimAsSupportedParentIndex = claim.usedAt.support.findIndex((child) => child.id === claimId);
			if (~claimAsSupportedParentIndex) {
				claim.usedAt.support.splice(claimAsSupportedParentIndex, 1);
			}
			const claimAsOpposedParentIndex = claim.usedAt.opposition.findIndex((child) => child.id === claimId);
			if (~claimAsOpposedParentIndex) {
				claim.usedAt.opposition.splice(claimAsOpposedParentIndex, 1);
			}

			const claimAsSupportedChildIndex = claim.usedHere.support.findIndex((child) => child.id === claimId);
			if (~claimAsSupportedChildIndex) {
				claim.usedHere.support.splice(claimAsSupportedChildIndex, 1);
			}
			const claimAsOpposedChildIndex = claim.usedHere.opposition.findIndex((child) => child.id === claimId);
			if (~claimAsOpposedChildIndex) {
				claim.usedHere.opposition.splice(claimAsOpposedChildIndex, 1);
			}

			return claim;
		});

		return { claims: cleanClaims };

	}

};