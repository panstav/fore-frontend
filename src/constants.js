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
	order: ['GUEST', 'MEMBER', 'EDITOR', 'ADMIN'],
	GUEST: 'GUEST',
	MEMBER: 'MEMBER',
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
	description: 'Collaborative truth-seeking.',
	contactEmailAddress: 'hello@fore.is'
};

export const localStorageKeys = {
	redirectTo: 'redirectTo',
	recentlyViewedClaims: 'recentlyViewedClaims',
	recentlyConnectedClaims: 'recentlyConnectedClaims'
};

export const spaceMaxParticipants = 12;