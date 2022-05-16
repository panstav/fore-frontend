import api from 'services/xhr';

import notify from 'lib/notify.js';

import { notifications } from 'constants.js';

export default {

	async addClaimWithUse({ claims }, { parentId, parentContent, direction, ...claim }) {
		const notificationId = notify(notifications.NEW_CLAIM_SENT);

		const fullClaim = await api.addClaim({ parentId, parentContent, direction, ...claim });
		notify(notifications.NEW_CLAIM_CREATED, { _id: notificationId, claimId: fullClaim.id });

		const indexOfParentClaim = claims.findIndex(({ id }) => id === parentId);
		const newDirectedUsedHere = claims[indexOfParentClaim].usedHere[direction].concat({ id: fullClaim.id, content: fullClaim.content, power: 0 });

		const newClaims = claims.concat(fullClaim);
		newClaims[indexOfParentClaim].usedHere[direction] = newDirectedUsedHere;

		return { claims: newClaims };
	}

};