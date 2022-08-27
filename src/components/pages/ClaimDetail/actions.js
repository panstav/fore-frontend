import api from 'services/xhr';

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

	trackClaimView({ recent }, { id, content }) {
		fifo(recent.viewedClaims, { id, content }, {
			max: 5,
			compare: (claim) => claim.id === id
		});
		return { recent };
	}

};