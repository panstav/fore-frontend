export const urls = {
	api: 'https://3000-panstav-forebackend-yzrfukqt9ur.ws-eu33.gitpod.io'
	// api: 'https://fore-backend-l6jtvpnuaa-uc.a.run.app'
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