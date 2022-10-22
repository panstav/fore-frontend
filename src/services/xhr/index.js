import apiCall from './api-call';
const { get, post, patch, del } = apiCall;

export default {

	identify: () => get('identify'),
	logout: () => post('logout'),

	getClaimDetail: ({ id }) => get(`claim-detail?id=${id}`),
	getSpaceDetail: (id) => get(`space-detail?id=${id}`),

	addClaim: (claim) => post('claim', claim),

	powerClaim: (relation) => post('power-claim', relation),
	releasePower: (relation) => post('release-power', relation),
	connectClaims: (connection) => post('connect-claims', connection),
	disconnectClaim: (connection) => del('claim-connection', connection),

	searchClaimsOfUser: ({ keywords, spaceId }) => get(`search-own-claims?q=${keywords}&spaceId=${spaceId}`),

	signUserForBetaUpdates: (updates) => patch('beta-updates', updates),

};