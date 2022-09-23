import api from 'services/xhr';

import { addClaim } from 'actions.js';

export default {

	addClaim,

	setCurrentSpace: ({ spaces }, spaceId) => {
		spaces.currentId = spaceId;
		return { spaces };
	},

	async getLatestClaims({ claims, spaces, flags }) {
		const newClaims = await api.getLatestClaims({ spaceId: spaces.currentId });

		const claimIdsFromState = claims.map(({ id }) => id);
		return {
			flags: Object.assign(flags, { fetchedLatest: true }),
			claims: claims.concat(newClaims.filter((claim) => !claimIdsFromState.includes(claim.id)))
		};
	}

};