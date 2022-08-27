export const urls = {
	frontEnd: 'https://fore.is',
	api: 'https://api.fore.is'
};

if (process.env.NODE_ENV !== 'production') {
	if (process.env.CODESPACE_NAME) urls.frontEnd = `https://${process.env.CODESPACE_NAME}.githubpreview.dev`;
	if (process.env.GITPOD_WORKSPACE_URL) urls.frontEnd = `${process.env.GITPOD_WORKSPACE_URL.replace('https://', 'https://1234-')}`;
	urls.api = 'https://fore-backend-dev-l6jtvpnuaa-uc.a.run.app';
	// urls.api = 'https://panstav-fore-backend-qwvqv7q2pxx-3000.githubpreview.dev';
	// urls.api = 'https://3000-panstav-forebackend-zm4h0qr6aac.ws-eu43.gitpod.io';
}

export const roles = {
	order: ['GUEST', 'MEMBER', 'MEMBER_BETA', 'EDITOR', 'ADMIN'],
	GUEST: 'GUEST',
	MEMBER: 'MEMBER',
	MEMBER_BETA: 'MEMBER_BETA',
	EDITOR: 'EDITOR',
	ADMIN: 'ADMIN'
};
roles.DEMO = roles.MEMBER;

export const notifications = {
	autoCloseMs: 5000,
	NEW_CLAIM_SENT: 'new-claim-sent',
	NEW_CLAIM_CREATED: 'new-claim-created',
	NEW_CLAIM_CONNECTION: 'new-claim-connection'
};