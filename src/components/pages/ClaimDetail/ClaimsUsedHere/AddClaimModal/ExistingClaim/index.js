import { connect } from "unistore/preact";

import localstorage from "services/localstorage";

import { localStorageKeys } from 'constants';

import Component from "./ExistingClaim";

export default connect(mapStateToProps)(ExistingClaim);

function ExistingClaim({ searchResults, searchKeywords, recentlyConnectedClaims, recentlyViewedClaims }) {

	const claimLists = [
		{
			title: 'Search results',
			claims: searchResults,
			searchRelated: true,
			searchKeywords
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

function mapStateToProps ({ user, search, spaces, claims }, { parentClaimId }) {

	const claimsUsedHere = concatUsedHere(claims, parentClaimId);
	const currentSpaceId = spaces.find(space => space.isCurrent).id;

	const recentlyConnectedClaims = localstorage.get(localStorageKeys.recentlyConnectedClaims, [])
		.filter((claim) => {
			// avoid showing the claim of this page
			claim.id !== parentClaimId
			// also avoid showing claims that are not in the current space
			&& atCurrentSpace(claim);
		})
		.map(markInvalidClaims);
	const recentlyViewedClaims = localstorage.get(localStorageKeys.recentlyViewedClaims, [])
		.filter((claim) => (
			// avoid showing the claim of this page
			claim.id !== parentClaimId
			// also avoid showing claims that aren't owned by the user
			&& claim.ownerId === user.id
			// also avoid showing claims that are not in the current space
			&& atCurrentSpace(claim)))
		.map(markInvalidClaims);

	const searchResults = search.ClaimDetailAddClaim.results
		.filter(atCurrentSpace)
		.map(markInvalidClaims);

	return {
		searchKeywords: search.ClaimDetailAddClaim.keywords,
		searchResults,
		recentlyConnectedClaims,
		recentlyViewedClaims
	};

	function concatUsedHere (claims, claimId) {
		const claimsUsedHere = claims.find((claim) => claim.id === claimId).usedHere;
		return claimsUsedHere.support.concat(claimsUsedHere.opposition);
	}

	function markInvalidClaims (claim) {
		return {
			...claim,
			invalid:
				// it was already used here
				claimsUsedHere.some((usedHere) => usedHere.id === claim.id)
				// it is the same as the parent claim
				|| claim.id === parentClaimId
		};
	}

	function atCurrentSpace({ spaceId }) {
		return spaceId === currentSpaceId;
	}

}