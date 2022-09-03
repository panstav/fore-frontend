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

	trackClaimView(state, { claimId, claimContent, authorId }) {

		const recentKey = 'recentlyViewedClaims';

		// load recently connected claims from localStorage
		const viewedClaims = localstorage.get(recentKey, []);
		
		// bump existing / add claim to the list
		fifo(viewedClaims, { id: claimId, content: claimContent, authorId }, {
			max: 5,
			compare: (claim) => claim.id === claimId
		});

		// save recently connected claims to localStorage
		localstorage.set(recentKey, viewedClaims);
		return {};
	}

};