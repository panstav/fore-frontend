import api from 'services/xhr';
import localstorage from 'services/localstorage';

import fifo from 'lib/fifo';

import { setCurrentSpace } from 'actions';

import { localStorageKeys } from 'constants';

export default {

	async getClaimDetail({ claims, spaces }, id) {

		const claim = await api.getClaimDetail({ id });

		// if the claim is not found - we don't want to add it to the list
		// service will probably handle it, but just in case quit here
		if (!claim) return;

		claim.isDetailed = true;

		const index = claims.findIndex((claim) => claim.id === id);
		if (index >= 0) {
			claims[index] = claim;
		} else {
			claims.push(claim);
		}

		// if there's no current space - it means we just landed, and now that we have the claim - we can set it
		if (!spaces.find((space) => space.isCurrent)) {
			const { spaces: updatedSpaces } = setCurrentSpace({ spaces, claims });
			return { claims, spaces: updatedSpaces };
		}

		return { claims };
	},

	trackClaimView({ claims }, { claimId }) {

		const claim = claims.find((claim) => claim.id === claimId);
		const newViewedClaim = {
			id: claimId,
			content: claim.content,
			authorId: claim.isAnonymous ? null : claim.author.id,
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
	}

};