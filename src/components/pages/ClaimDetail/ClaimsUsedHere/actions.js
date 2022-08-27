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

	},

	async connectClaim({ claims }, { parentId, parentContent, childId, childContent, direction }) {

		await api.connectClaim({ parentId, parentContent, childId, childContent, direction });
		notify(notifications.NEW_CLAIM_CONNECTED);

		const indexOfParentClaim = claims.findIndex(({ id }) => id === parentId);
		const indexOfChildClaim = claims.findIndex(({ id }) => id === childId);

		const newParentDirectedUsedHere = claims[indexOfParentClaim].usedHere[direction].concat({ id: childId, content: childContent, power: 0 });
		const newChildDirectedUsedAt = claims[indexOfChildClaim].usedAt[direction].concat({ id: parentId, content: parentContent, power: 0 });

		claims[indexOfParentClaim].usedHere[direction] = newParentDirectedUsedHere;
		claims[indexOfChildClaim].usedAt[direction] = newChildDirectedUsedAt;

		return { claims };

	}

};