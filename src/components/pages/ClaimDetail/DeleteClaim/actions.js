import api from "services/xhr";
import localstorage from "services/localstorage";
import trackEvents from "services/track-events";

import { localStorageKeys } from "constants";

export default {

	async deleteClaim({ claims }, claimId) {

		const spaceId = claims.find(claim => claim.id === claimId).spaceId;

		await api.deleteClaim({ claimId });
		trackEvents('delete_claim', { spaceId, claimId });

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
			claims.splice(claimIndex, 1);
		}

		const cleanClaims = claims.map((claim) => {
			if (!claim.isDetailed) return claim;

			const claimAsSupportedParentIndex = claim.usedAt.support.findIndex((child) => child.id === claimId);
			if (~claimAsSupportedParentIndex) {
				claim.usedAt.support.splice(claimAsSupportedParentIndex, 1);
			}
			const claimAsOpposedParentIndex = claim.usedAt.opposition.findIndex((child) => child.id === claimId);
			if (~claimAsOpposedParentIndex) {
				claim.usedAt.opposition.splice(claimAsOpposedParentIndex, 1);
			}

			const claimAsSupportedChildIndex = claim.usedHere.support.findIndex((child) => child.id === claimId);
			if (~claimAsSupportedChildIndex) {
				claim.usedHere.support.splice(claimAsSupportedChildIndex, 1);
			}
			const claimAsOpposedChildIndex = claim.usedHere.opposition.findIndex((child) => child.id === claimId);
			if (~claimAsOpposedChildIndex) {
				claim.usedHere.opposition.splice(claimAsOpposedChildIndex, 1);
			}

			return claim;
		});

		return { claims: cleanClaims };

	}

}