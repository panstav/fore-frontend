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

	powerClaim(relation) {
		return apiCall.post('power-claim', relation);
	},

	releasePower(relation) {
		return apiCall.post('release-power', relation);
	},

	async addClaim(claim) {
		return apiCall.post('claim', claim);
	},

	async connectClaims(connection) {
		return apiCall.post('connect-claims', connection);
	},

	async disconnectClaim(connection) {
		return apiCall.delete('claim-connection', connection);
	},

	async searchClaimsOfUser(keywords) {
		return apiCall.get(`search-own-claims?q=${keywords}`);
	}

};