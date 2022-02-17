import api from 'services/xhr';

export default {

	async getClaimDetail({ claims }, id) {
		const claim = await api.getClaimDetail({ id });
		claims.push(claim);
		return { claims };
	}

};