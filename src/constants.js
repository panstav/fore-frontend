export const urls = {
	frontEnd: 'https://fore.is',
	api: 'https://api.fore.is'
};

if (process.env.NODE_ENV !== 'production') {
	urls.frontEnd = `${process.env.GITPOD_WORKSPACE_URL.replace('https://', 'https://1234-')}`;
	// urls.api = 'https://3000-panstav-forebackend-zm4h0qr6aac.ws-eu43.gitpod.io/';
	urls.api = 'https://fore-backend-dev-l6jtvpnuaa-uc.a.run.app';
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