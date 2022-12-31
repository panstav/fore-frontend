import api from "services/xhr";
import trackEvents from "services/track-events";

export default {

	async claimAnonymousClaim({ user, claims }, claimId) {

		const spaceId = claims.find(claim => claim.id === claimId).spaceId;

		await api.claimAnonymousClaim({ claimId });
		trackEvents('claim_anonymous_claim', { spaceId, claimId });

		const claimIndex = claims.findIndex((claim) => claim.id === claimId);
		if (~claimIndex) {
			claims[claimIndex].author = {
				id: user.id,
				name: user.name
			};
			claims[claimIndex].isAnonymous = false;
		}

		return { claims };

	}

};