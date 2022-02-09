import api from 'services/xhr';

export default {

	async getLatestClaims({ claims, flags }) {
		const newClaims = await api.getLatestClaims();
		const claimIdsFromState = claims.map(({ id }) => id);
		return {
			flags: Object.assign(flags, { fetchedLatest: true }),
			claims: claims.concat(newClaims.filter((claim) => !claimIdsFromState.includes(claim.id)))
		};
	}

};