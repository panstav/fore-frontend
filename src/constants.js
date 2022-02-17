export const urls = {
	// api: ''
	api: 'http://localhost:8080'
};

export const roles = {
	order: ['GUEST', 'MEMBER', 'EDITOR', 'ADMIN'],
	GUEST: 'GUEST',
	MEMBER: 'MEMBER',
	EDITOR: 'EDITOR',
	ADMIN: 'ADMIN'
};
roles.DEMO = roles.MEMBER;

export const claimsUse = {
	support: 'support of',
	opposition: 'opposition to'
};

export const notifications = {
	NEW_CLAIM_SENT: 'new-claim-sent',
	NEW_CLAIM_CREATED: 'new-claim-created'
};