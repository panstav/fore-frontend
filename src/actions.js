import api from 'services/xhr';

import notify from 'lib/notify.js';
import scrollBackToTop from 'lib/scroll-back-to-top';

import initialState from 'config/Providers/Store/initial-state';

import { notifications } from 'constants.js';

export async function addClaim({ spaces, claims }, claim, { avoidNotifications = false } = {}) {

	let notificationId;
	if (!avoidNotifications) notificationId = notify(notifications.NEW_CLAIM_SENT);

	claim.spaceId = claim.spaceId || spaces.find((space) => space.isCurrent).id;
	const fullClaim = await api.addClaim(claim);

	if (!avoidNotifications) notify(notifications.NEW_CLAIM_CREATED, { _id: notificationId, claimId: fullClaim.id });

	claims.push(fullClaim);
	return { claims };
}

export async function logOut() {
	await api.logout();
	scrollBackToTop();
	return initialState;
}