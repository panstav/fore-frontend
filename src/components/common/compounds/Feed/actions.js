import api from "services/xhr";

import { addClaim } from "actions";

export default {

	addClaim,

	async loadMoreClaims({ claims, spaces }) {

		const spaceIndex = spaces.findIndex((space) => space.isCurrent);
		const spaceId = spaces[spaceIndex].id;

		const lastClaim = claims
			.filter((claim) => claim.spaceId === spaceId)
			.sort((a, b) => b.createdAt - a.createdAt)
			.pop();

		const { claims: newClaims, isLastBatch } = await api.getClaimsBefore({ time: lastClaim.createdAt, spaceId });
		spaces[spaceIndex].hasLoadedAll = isLastBatch;

		return {
			claims: claims.concat(newClaims),
			spaces
		};
	}

};