import api from 'services/xhr';

import showNotification from 'lib/show-notification.js';

import { notifications } from 'constants.js';

export default {

	async addClaim({ claims }, claim) {

		const notificationId = showNotification(notifications.NEW_CLAIM_SENT);

		api.addClaim(claim).then((fullClaim) => {
			showNotification(notifications.NEW_CLAIM_CREATED, { _notificationId: notificationId, id: fullClaim.id });

			if (fullClaim.isAnonymous) return {};

			claims.push(fullClaim);
		});

		return { claims };
	}


};