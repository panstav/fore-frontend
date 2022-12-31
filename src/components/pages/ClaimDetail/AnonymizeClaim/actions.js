import api from "services/xhr";
import localstorage from "services/localstorage";
import trackEvents from "services/track-events";

import { emptySearch } from "components/config/Providers/Store/initial-state";

import { localStorageKeys } from "constants";

export default {

	async anonymizeClaim({ claims, search }, claimId) {

		const spaceId = claims.find(claim => claim.id === claimId).spaceId;

		await api.anonymizeClaim({ claimId });
		trackEvents('anonymize_claim', { spaceId, claimId });

		const recentlyViewedClaims = localstorage.get(localStorageKeys.recentlyViewedClaims, []);
		const recentlyViewedClaimIndex = recentlyViewedClaims.findIndex((claim) => claim.id === claimId);
		if (~recentlyViewedClaimIndex) {
			recentlyViewedClaims.splice(recentlyViewedClaimIndex, 1);
			localstorage.set(localStorageKeys.recentlyViewedClaims, recentlyViewedClaims);
		}

		const recentlyConnectedClaims = localstorage.get(localStorageKeys.recentlyConnectedClaims, []);
		const recentlyConnectedClaimIndex = recentlyConnectedClaims.findIndex((claim) => claim.id === claimId);
		if (~recentlyConnectedClaimIndex) {
			recentlyConnectedClaims.splice(recentlyConnectedClaimIndex, 1);
			localstorage.set(localStorageKeys.recentlyConnectedClaims, recentlyConnectedClaims);
		}

		const claimIndex = claims.findIndex((claim) => claim.id === claimId);
		if (~claimIndex) {
			claims[claimIndex].author = null;
			claims[claimIndex].isAnonymous = true;
		}

		search.ClaimDetailAddClaim = emptySearch;

		return { claims, search };

	}

};