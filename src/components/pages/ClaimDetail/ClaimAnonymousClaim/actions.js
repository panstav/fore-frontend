import api from "services/xhr";
import trackEvents from "services/track-events";

export default {

	async claimAnonymousClaim({ user, claims }, { claimId, spaceId }) {

		const { isUserCurrentAndOriginalAuthor = false } = await api.claimAnonymousClaim({ claimId });
		trackEvents('claim_anonymous_claim', { spaceId, claimId });

		const claimIndex = claims.findIndex((claim) => claim.id === claimId);
		Object.assign(claims[claimIndex], {
			isAnonymous: false,
			owner: {
				id: user.id,
				name: user.name
			},
			isUserCurrentAndOriginalAuthor
		});

		return { claims };

	}

};