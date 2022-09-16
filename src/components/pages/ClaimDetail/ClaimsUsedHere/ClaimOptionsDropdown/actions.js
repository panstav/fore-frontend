import api from 'services/xhr';

import notify from 'lib/notify.js';

import { addClaim } from 'actions';

import { notifications } from 'constants.js';

export default {

	addClaim,

	async powerClaim({ claims }, { parentClaimId, childClaimId, direction }) {

		api.powerClaim({ parentId: parentClaimId, childId: childClaimId, direction });

		const indexOfParentClaim = claims.findIndex(claim => claim.id === parentClaimId);
		const indexOfChildClaim = claims[indexOfParentClaim].usedHere[direction].findIndex((childClaim) => childClaim.id === childClaimId);

		Object.assign(claims[indexOfParentClaim].usedHere[direction][indexOfChildClaim], {
			isPoweredByUser: true,
			power: claims[indexOfParentClaim].usedHere[direction][indexOfChildClaim].power + 1
		});

		return { claims };

	},

	async releasePower({ claims }, { parentClaimId, childClaimId, direction }) {

		api.releasePower({ parentId: parentClaimId, childId: childClaimId, direction });

		const indexOfParentClaim = claims.findIndex(claim => claim.id === parentClaimId);
		const indexOfChildClaim = claims[indexOfParentClaim].usedHere[direction].findIndex((childClaim) => childClaim.id === childClaimId);

		Object.assign(claims[indexOfParentClaim].usedHere[direction][indexOfChildClaim], {
			isPoweredByUser: false,
			power: claims[indexOfParentClaim].usedHere[direction][indexOfChildClaim].power - 1
		});

		return { claims };

	},

	async disconnectClaim({ claims }, { parentClaimId, childClaimId, direction }) {

		api.disconnectClaim({ parentId: parentClaimId, childId: childClaimId, direction })
			.then(() => notify(notifications.CLAIM_DISCONNECTED, { claimId: childClaimId }));

		const indexOfParentClaim = claims.findIndex(claim => claim.id === parentClaimId);
		const indexOfUsedChildClaim = claims[indexOfParentClaim].usedHere[direction].findIndex((childClaim) => childClaim.id === childClaimId);

		const list = claims[indexOfParentClaim].usedHere[direction];
		claims[indexOfParentClaim].usedHere[direction] = list.slice(0, indexOfUsedChildClaim).concat(list.slice(indexOfUsedChildClaim + 1));

		const indexOfChildClaim = claims.findIndex(claim => claim.id === childClaimId);
		if (~indexOfChildClaim && ('usedAt' in claims[indexOfChildClaim])) {
			const list = claims[indexOfChildClaim].usedAt[direction];
			claims[indexOfChildClaim].usedAt[direction] = list.slice(0, indexOfChildClaim).concat(list.slice(indexOfChildClaim + 1));
		}

		return { claims };

	}

};