import api from 'services/xhr';

import notify from 'lib/notify.js';

import { notifications } from 'constants.js';

export default (store) => ({

	async addClaimWithUse(atActionState, { parentId, parentContent, direction, ...claim }) {

		const notificationId = notify(notifications.NEW_CLAIM_SENT);

		const fullClaim = await api.addClaim({ parentId, parentContent, direction, ...claim });
		notify(notifications.NEW_CLAIM_CREATED, { _id: notificationId, id: fullClaim.id });

		const { claims } = store.getState();

		claims[claims.findIndex(({ id }) => id === parentId)]
			.usedHere[direction].push({ id: fullClaim.id, content: fullClaim.content, power: 0 });

		claims.push(fullClaim);

		return { claims };
	}

});