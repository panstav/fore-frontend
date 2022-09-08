import api from 'services/xhr';

import notify from 'lib/notify.js';
import fifo from 'lib/fifo';

import { notifications } from 'constants.js';
import localstorage from 'services/localstorage';

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

	async connectClaims({ claims }, { parentId, parentContent, childId, childContent, direction }) {

		await api.connectClaims({ parentId, parentContent, childId, childContent, direction });
		notify(notifications.NEW_CLAIM_CONNECTION);

		const indexOfParentClaim = claims.findIndex(({ id }) => id === parentId);
		if (~indexOfParentClaim) {
			const newParentDirectedUsedHere = claims[indexOfParentClaim].usedHere[direction].concat({ id: childId, content: childContent, power: 0 });
			claims[indexOfParentClaim].usedHere[direction] = newParentDirectedUsedHere;
		}

		const indexOfChildClaim = claims.findIndex(({ id }) => id === childId);
		if (~indexOfChildClaim) {
			const newChildDirectedUsedAt = claims[indexOfChildClaim].usedAt[direction].concat({ id: parentId, content: parentContent, power: 0 });
			claims[indexOfChildClaim].usedAt[direction] = newChildDirectedUsedAt;
		}

		return { claims };

	},

	trackClaimConnection(state, { id, content }) {

		// load recently connected claims from localStorage
		const { connectedClaims = [] } = localstorage.get('recent', {});

		// bump existing / add claim to the list
		fifo(connectedClaims, { id, content }, {
			max: 5,
			compare: (claim) => claim.id === id
		});

		// save recently connected claims to localStorage
		localstorage.set('recentlyConnectedClaims', connectedClaims);
		return {};

	}

};