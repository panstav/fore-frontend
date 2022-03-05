import api from 'services/xhr';

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
	}

};