import api from 'services/xhr';
import localstorage from 'services/localstorage';

import fifo from 'lib/fifo';

import { setCurrentSpace } from 'actions';

import { localStorageKeys } from 'constants';

export default {

	async getClaimDetail({ claims, spaces }, id) {
		const claim = await api.getClaimDetail({ id });
		claim.isDetailed = true;

		const index = claims.findIndex((claim) => claim.id === id);
		if (index >= 0) {
			claims[index] = claim;
		} else {
			claims.push(claim);
		}

		// update current space, in case user landed on a claim detail page
		const { spaces: updatedSpaces } = setCurrentSpace({ spaces, claims });

		return { claims, spaces: updatedSpaces };
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