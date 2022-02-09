import api from 'services/xhr';

import notify from 'lib/notify.js';

import { notifications } from 'constants.js';

export default (store) => ({

	async addClaim(atActionState, claim) {

		const notificationId = notify(notifications.NEW_CLAIM_SENT);

		api.addClaim(claim).then((fullClaim) => {
			notify(notifications.NEW_CLAIM_CREATED, { _id: notificationId, id: fullClaim.id });

			const { claims } = store.getState();
			claims.push(fullClaim);
			store.setState({ claims });
		});

		return {};
	}


});