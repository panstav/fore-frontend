import { ClaimDetailContext } from "contexts";
import withContext from "lib/with-context";
import { connect } from "unistore/preact";

import actions from './actions';

import Component from "./ExistingClaim";

export default withContext({
	context: ClaimDetailContext,
	map: ({ id }) => ({ claimId: id }),
	component: connect(mapStateToProps, actions)(ExistingClaim)
});

function ExistingClaim({ searchResults, recentlyConnectedClaims, recentlyViewedClaims, addClaimWithUse }) {

	const claimLists = [
		{
			title: 'Search results',
			claims: searchResults,
			searchRelated: true
		},
		{
			title: 'Recently used',
			claims: recentlyConnectedClaims
		},
		{
			title: 'Recently viewed',
			claims: recentlyViewedClaims
		}
	];

	const props = {
		claimLists
	};

	return Component(props);

}

function mapStateToProps ({ search, recent, claims }, { claimId }) {

	const claimsUsedHere = concatUsedHere(claims, claimId);

	return {
		searchResults: search.ClaimDetailAddClaim
			.map(markAlreadyUsed),
		recentlyConnectedClaims: recent.connectedClaims
			.map(markAlreadyUsed),
		recentlyViewedClaims: recent.viewedClaims
			.filter((claim) => claim.id !== claimId)
			.map(markAlreadyUsed)
	};

	function concatUsedHere (claims, claimId) {
		const claimsUsedHere = claims.find((claim) => claim.id === claimId).usedHere;
		return claimsUsedHere.support.concat(claimsUsedHere.opposition);
	}

	function markAlreadyUsed (claim) {

		claim.alreadyUsedHere = claimsUsedHere.some((claimUsedHere) => {
			// disable results that are already used here or are the parent id
			return claimUsedHere.id === claim.id || claim.id === claimId;
		});

		return claim;
	}

}