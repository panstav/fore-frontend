import api from 'services/xhr';
import localstorage from 'services/localstorage';
import trackEvents from 'services/track-events';

import notify from 'lib/notify.js';
import fifo from 'lib/fifo';

import { notifications, localStorageKeys } from 'constants.js';

export default {

	async addClaimWithUse({ claims }, { parentId, parentContent, direction, ...claim }) {
		const notificationId = notify(notifications.NEW_CLAIM_SENT);

		const indexOfParentClaim = claims.findIndex(({ id }) => id === parentId);
		const spaceId = claims[indexOfParentClaim].spaceId;

		const fullClaim = await api.addClaim({ parentId, parentContent, direction, spaceId, ...claim });
		trackEvents('create_claim_and_use', { claimId: fullClaim.id, spaceId, parentId, direction });
		notify(notifications.NEW_CLAIM_CREATED, { _id: notificationId, claimId: fullClaim.id });

		fullClaim.isByUser = true;
		const newDirectedUsedHere = claims[indexOfParentClaim].usedHere[direction].concat({ id: fullClaim.id, content: fullClaim.content, power: 0, isByUser: true });

		const newClaims = claims.concat(fullClaim);
		newClaims[indexOfParentClaim].usedHere[direction] = newDirectedUsedHere;

		return { claims: newClaims };

	},

	async connectClaims({ claims }, { parentId, parentContent, childId, childContent, direction }) {

		const indexOfParentClaim = claims.findIndex(({ id }) => id === parentId);
		const newParentDirectedUsedHere = claims[indexOfParentClaim].usedHere[direction].concat({ id: childId, content: childContent, power: 0, isByUser: true });
		claims[indexOfParentClaim].usedHere[direction] = newParentDirectedUsedHere;

		const spaceId = claims[indexOfParentClaim].spaceId;
		api.connectClaims({ parentId, parentContent, childId, childContent, direction, spaceId })
			.then(() => notify(notifications.NEW_CLAIM_CONNECTION));
		trackEvents('use_claim', { parentId, childId, direction, spaceId });

		const indexOfChildClaim = claims.findIndex(({ id }) => id === childId);
		if (~indexOfChildClaim && ('usedAt' in claims[indexOfChildClaim])) {
			const newChildDirectedUsedAt = claims[indexOfChildClaim].usedAt[direction].concat({ id: parentId, content: parentContent, power: 0 });
			claims[indexOfChildClaim].usedAt[direction] = newChildDirectedUsedAt;
		}

		return { claims };

	},

	trackClaimConnection({ claims }, { claimId }) {

		const claim = claims.find((claim) => claim.id === claimId);
		const newlyConnectedClaim = {
			id: claimId,
			content: claim.content,
			spacedId: claim.spaceId
		};

		// load recently connected claims from localStorage
		const recentlyConnectedClaims = localstorage.get(localStorageKeys.recentlyConnectedClaims, []);

		// bump existing / add claim to the list
		fifo(recentlyConnectedClaims, newlyConnectedClaim, {
			max: 5,
			compare: (claim) => claim.id === claimId
		});

		// save recently connected claims to localStorage
		localstorage.set(localStorageKeys.recentlyConnectedClaims, recentlyConnectedClaims);
		return {};

	}

};