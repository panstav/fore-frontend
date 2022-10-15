import api from 'services/xhr';
import localstorage from 'services/localstorage';

import fifo from 'lib/fifo';

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

		const recentKey = 'recentlyViewedClaims';

		const claim = claims.find((claim) => claim.id === claimId);
		const newViewedClaim = {
			id: claimId,
			content: claim.content,
			authorId: claim.author.id,
			spaceId: claim.spaceId,
		};

		// load recently connected claims from localStorage
		const recentlyViewedClaims = localstorage.get(recentKey, []);

		// bump existing / add claim to the list
		fifo(recentlyViewedClaims, newViewedClaim, {
			max: 5,
			compare: (claim) => claim.id === claimId
		});

		// save recently connected claims to localStorage
		localstorage.set(recentKey, recentlyViewedClaims);
		return {};
	}

};