import sanitize from 'lib/sanitize';

import apiCall from './api-call';
const { get, post, patch, del } = apiCall;

export default {

	identify: () => get('identify'),
	getInvitationDetail: (invitationId) => get(`invitation-detail?id=${invitationId}`),
	acceptSpaceInvitation: (invitationId) => post('accept-invitation', { invitationId }),
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

	addSpace: (space) => post('space', space),
	createInvitation: (invitation) => post('invitation', invitation),

	claimAnonymousClaim: ({ claimId }) => post('claim-anonymous-claim', { claimId }),
	anonymizeClaim: ({ claimId }) => post('anonymize-claim', { claimId }),

	searchClaimsOfUser: ({ keywords, spaceId }) => get(`search-own-claims?q=${sanitize(keywords)}&spaceId=${spaceId}`),

	getNotificationsBefore: ({ time }) => get(`notifications?olderThan=${time}`),

	signUserForUpdates: (updates) => patch('signup-for-updates', updates),

};