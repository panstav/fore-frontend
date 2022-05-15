import api from 'services/xhr';

import notify from 'lib/notify.js';

import { notifications } from 'constants.js';

export async function addClaim({ claims }, claim, { avoidNotifications }) {

	let notificationId;
	if (!avoidNotifications) notificationId = notify(notifications.NEW_CLAIM_SENT);

	const fullClaim = await api.addClaim(claim);

	if (!avoidNotifications) notify(notifications.NEW_CLAIM_CREATED, { _id: notificationId, claimId: fullClaim.id });

	claims.push(fullClaim);
	return { claims };
}