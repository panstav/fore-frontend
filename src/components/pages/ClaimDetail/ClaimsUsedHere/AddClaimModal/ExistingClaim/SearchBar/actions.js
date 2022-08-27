export default {

	clearSearchResults: ({ search }) => {
		search.ClaimDetailAddClaim = [];
		return { search };
	},

	async searchClaimsOfUser({ search }, keywords) {

		let searchResults = [];

		if (keywords) {
			searchResults = await (new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([
						{ id: '1231', content: 'Claim 1' },
						{ id: '122', content: 'Claim 2' },
						{ id: '133', content: 'Claim 3' },
						{ id: '234', content: 'Claim 4' },
						{ id: '123', content: 'Claim 5' }
					]);
				}, 500);
			}))
		}
		// const searchResults = await api.searchForKeywords(keywords);

		search.ClaimDetailAddClaim = searchResults;

		return { search };

		// const fullClaim = await api.addClaim({ claimId, claimContent, parentId, parentContent, direction });
		// notify(notifications.NEW_CLAIM_CREATED, { _id: notificationId, claimId: fullClaim.id });

		// const indexOfParentClaim = claims.findIndex(({ id }) => id === parentId);
		// const newDirectedUsedHere = claims[indexOfParentClaim].usedHere[direction].concat({ id: fullClaim.id, content: fullClaim.content, power: 0 });

		// const newClaims = claims.concat(fullClaim);
		// newClaims[indexOfParentClaim].usedHere[direction] = newDirectedUsedHere;

		// return { claims: newClaims };
	}

};