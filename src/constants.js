export const urls = {
	api: 'https://api.fore.is'
};

if (process.env.NODE_ENV !== 'production') {
	urls.api = 'https://3000-panstav-forebackend-zm4h0qr6aac.ws-eu38.gitpod.io';
}

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