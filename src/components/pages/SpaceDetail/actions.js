import api from "services/xhr";

export default {

	async getSpaceDetail({ spaces, claims }, spaceId) {

		// find space in store by id
		const indexOfRequestedSpace = spaces.findIndex(space => space.id === spaceId);

		let space, cachedClaims = [];
		if (!~indexOfRequestedSpace) {
			// if space not found in store, fetch it from server
			const result = await fetchSpaceDetail();
			if (!result) return;

			[space, cachedClaims] = result;
			spaces.push(space);
		} else {
			// if space found in store, use it
			if (!spaces[indexOfRequestedSpace].isDetailed) {
				// unless space is not detailed, fetch it from server
				const result = await fetchSpaceDetail();
				if (!result) return;

				[space, cachedClaims] = result;
				// eslint-disable-next-line no-param-reassign
				spaces[indexOfRequestedSpace] = Object.assign({}, spaces[indexOfRequestedSpace], space);
			}
		}

		const claimIdsFromState = claims.map(({ id }) => id);
		const cleanSpaces = spaces.map((space) => {
			// eslint-disable-next-line no-param-reassign
			if (space.isCurrent) delete space.isCurrent;
			// eslint-disable-next-line no-param-reassign
			if (space.id === spaceId) space.isCurrent = true;
			return space;
		});

		return {
			spaces: cleanSpaces,
			claims: claims.concat(cachedClaims.filter((claim) => !claimIdsFromState.includes(claim.id)))
		};

		async function fetchSpaceDetail () {
			const result = await api.getSpaceDetail(spaceId);

			// if the space is not found - we don't want to add it to the list
			// service will probably handle it, but just in case quit here
			if (!result) return;

			const { claims, ...space } = result;
			space.isDetailed = true;
			return [space, claims];
		}
	}

};