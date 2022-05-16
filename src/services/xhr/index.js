import apiCall from './api-call';

export default {

	async identify() {
		return apiCall.get('identify');
	},

	async logout() {
		return apiCall.get('logout');
	},

	async signUserForBetaUpdates(updates) {
		return apiCall.patch('beta-updates', updates);
	},

	async getLatestClaims() {
		return apiCall.get('claims?query=new');
	},

	async getTopClaims() {
		return apiCall.get('claims?query=top');
	},

	async getClaimDetail({ id }) {
		return apiCall.get(`claim-detail?id=${id}`);
	},

	async addClaim(claim) {
		return apiCall.post('claim', claim);
	}

};