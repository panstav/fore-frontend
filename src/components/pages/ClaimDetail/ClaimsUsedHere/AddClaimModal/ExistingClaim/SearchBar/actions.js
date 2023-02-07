import api from 'services/xhr';

import { emptySearch } from "components/config/Store/initial-state";

export default {

	clearSearchResults: ({ search }) => {
		search.ClaimDetailAddClaim = emptySearch;
		return { search };
	},

	async searchClaimsOfUser({ search, spaces }, keywords) {

		if (!keywords) return { search };

		const searchResults = await api.searchClaimsOfUser({
			keywords,
			spaceId: spaces.find(space => space.isCurrent).id
		});

		search.ClaimDetailAddClaim = {
			results: searchResults || [],
			keywords
		};

		return { search };

	}

};