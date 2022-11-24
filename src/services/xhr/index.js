import apiCall from './api-call';
const { get, post, patch, del } = apiCall;

export default {

	identify: () => get('identify'),
	logout: () => post('logout'),

	getSpaceDetail: (id) => get(`space-detail?id=${id}`),
	getClaimsBefore: ({spaceId, time}) => get(`claims?olderThan=${time}&spaceId=${spaceId}`),
	getClaimsAfter: ({spaceId, time}) => get(`claims?newerThan=${time}&spaceId=${spaceId}`),
	getClaimDetail: ({ id }) => get(`claim-detail?id=${id}`),

	addClaim: (claim) => post('claim', { ...claim, content: sanitize(claim.content) }),
	deleteClaim: ({ claimId }) => del('claim', { claimId }),

	powerClaim: (relation) => post('power-claim', relation),
	releasePower: (relation) => post('release-power', relation),
	connectClaims: (connection) => post('connect-claims', connection),
	disconnectClaim: (connection) => del('claim-connection', connection),

	searchClaimsOfUser: ({ keywords, spaceId }) => get(`search-own-claims?q=${sanitize(keywords)}&spaceId=${spaceId}`),

	signUserForUpdates: (updates) => patch('signup-for-updates', updates),

};

function sanitize (content) {
	return content.replaceAll(/[^a-zA-Z !@#$%&*()`\-_+=\\/'"{}\[\]?><.,]/g, '').trim();
}