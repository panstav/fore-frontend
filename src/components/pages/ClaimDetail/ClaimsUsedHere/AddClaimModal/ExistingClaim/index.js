import { connect } from "unistore/preact";

import localstorage from "services/localstorage";

import withContext from "lib/with-context";

import { ClaimDetailContext } from "contexts";

import actions from './actions';

import Component from "./ExistingClaim";

export default withContext({
	context: ClaimDetailContext,
	map: ({ id }) => ({ claimId: id }),
	component: connect(mapStateToProps, actions)(ExistingClaim)
});

function ExistingClaim({ searchResults, recentlyConnectedClaims, recentlyViewedClaims }) {

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

function mapStateToProps ({ search, claims }, { claimId }) {

	const claimsUsedHere = concatUsedHere(claims, claimId);

	const recentlyConnectedClaims = localstorage.get('recentlyConnectedClaims', [])
		.map(markInvalidClaims);
	const recentlyViewedClaims = localstorage.get('recentlyViewedClaims', [])
		// avoid showing "last" addition to recently viewed
		.filter((claim) => claim.id !== claimId)
		.map(markInvalidClaims);

	return {
		searchResults: search.ClaimDetailAddClaim
			.map(markInvalidClaims),
		recentlyConnectedClaims,
		recentlyViewedClaims

	};

	function concatUsedHere (claims, claimId) {
		const claimsUsedHere = claims.find((claim) => claim.id === claimId).usedHere;
		return claimsUsedHere.support.concat(claimsUsedHere.opposition);
	}

	function markInvalidClaims (claim) {

		// disable the claim if
		claim.invalid =
			// it was already used here
			claimsUsedHere.some((usedHere) => usedHere.id === claim.id)
			// it is the same as the parent claim
			|| claim.id === claimId;

		return claim;
	}

}