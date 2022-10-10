import api from "services/xhr";

import { addClaim } from "actions";

export default {

	addClaim,

	async getSpaceDetail({ spaces, claims }, spaceId) {

		// find space in store by id
		const indexOfRequestedSpace = spaces.findIndex(space => space.id === spaceId);

		let space, cachedClaims = [];
		if (!~indexOfRequestedSpace) {
			// if space not found in store, fetch it from server
			[space, cachedClaims] = await fetchSpaceDetail();
			spaces.push(space);
		} else {
			// if space found in store, use it
			if (!spaces[indexOfRequestedSpace].isDetailed) {
				// unless space is not detailed, fetch it from server
				[space, cachedClaims] = await fetchSpaceDetail();
				spaces[indexOfRequestedSpace] = Object.assign({}, spaces[indexOfRequestedSpace], space);
			}
		}

		const claimIdsFromState = claims.map(({ id }) => id);
		const cleanSpaces = spaces.map((space) => {
			if (space.isCurrent) delete space.isCurrent;
			if (space.id === spaceId) space.isCurrent = true;
			return space;
		});

		return {
			spaces: cleanSpaces,
			claims: claims.concat(cachedClaims.filter((claim) => !claimIdsFromState.includes(claim.id)))
		};

		async function fetchSpaceDetail () {
			const { claims, ...space } = await api.getSpaceDetail(spaceId);
			space.isDetailed = true;
			return [space, claims];
		}
	}

};