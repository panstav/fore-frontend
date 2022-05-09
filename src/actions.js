import api from 'services/xhr';

import notify from 'lib/notify.js';

import { notifications } from 'constants.js';

export async function addClaim({ claims }, claim) {

	const notificationId = notify(notifications.NEW_CLAIM_SENT);

	const fullClaim = await api.addClaim(claim);

	notify(notifications.NEW_CLAIM_CREATED, { _id: notificationId, id: fullClaim.id });

	claims.push(fullClaim);
	return { claims };
}