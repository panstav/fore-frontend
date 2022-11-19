export const urls = {
	frontEnd: window.origin,
	api: 'https://api.fore.is'
};

if (process.env.NODE_ENV !== 'production') {
	urls.api = {
		local: 'http://localhost:3000',
		github: 'https://panstav-fore-backend-qwvqv7q2pxx-3000.preview.app.github.dev',
		gitpod: 'https://3000-panstav-forebackend-zm4h0qr6aac.ws-eu43.gitpod.io',
		cloud: 'https://fore-backend-dev-l6jtvpnuaa-uc.a.run.app'
	}[process.env.API];
}

export const roles = {
	order: ['GUEST', 'MEMBER', 'MEMBER_BETA', 'EDITOR', 'ADMIN'],
	GUEST: 'GUEST',
	MEMBER: 'MEMBER',
	MEMBER_BETA: 'MEMBER_BETA',
	EDITOR: 'EDITOR',
	ADMIN: 'ADMIN'
};

export const notifications = {
	autoCloseMs: 5000,
	NEW_CLAIM_SENT: 'new-claim-sent',
	NEW_CLAIM_CREATED: 'new-claim-created',
	NEW_CLAIM_CONNECTION: 'new-claim-connection',
	CLAIM_DISCONNECTED: 'claim-disconnected'
};

export const meta = {
	title: 'Fore',
	description: 'Where collaborative truth-seeking happens.'
};

export const localStorageKeys = {
	redirectTo: 'redirectTo',
	recentlyViewedClaims: 'recentlyViewedClaims',
	recentlyConnectedClaims: 'recentlyConnectedClaims'
};