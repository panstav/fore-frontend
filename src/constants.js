export const maintenanceMode = process.env.MAINTENANCE_MODE === 'true';
export const isOffline = process.env.NODE_ENV === 'offline';

export const urls = {
	frontEnd: window.origin,
	api: 'https://api.fore.is'
};

export let localToCloudDev = false;
if (process.env.API) {
	if (process.env.API === 'devCloud' && window.origin.includes('localhost')) localToCloudDev = true;
	urls.api = {
		local: 'http://localhost:3000',
		devCloud: 'https://fore-backend-dev-l6jtvpnuaa-uc.a.run.app'
	}[process.env.API];
}

export const roles = {
	order: ['GUEST', 'MEMBER', 'DEBATER', 'ADMIN'],
	GUEST: 'GUEST',
	MEMBER: 'MEMBER',
	DEBATER: 'DEBATER',
	ADMIN: 'ADMIN'
};

export const spaceTypes = {
	PUBLIC: 'public',
	PRIVATE: 'private',
	SHARED: 'shared',
	DEBATE: 'debate'
};

export const notifications = {
	autoCloseMs: 5000,
	NEW_CLAIM_SENT: 'new-claim-sent',
	NEW_CLAIM_CREATED: 'new-claim-created',
	NEW_CLAIM_CONNECTION: 'new-claim-connection',
	CLAIM_DISCONNECTED: 'claim-disconnected',
	SPACE_SETTINGS_SET: 'space-settings-set'
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

export const spaceMaxParticipants = 8;