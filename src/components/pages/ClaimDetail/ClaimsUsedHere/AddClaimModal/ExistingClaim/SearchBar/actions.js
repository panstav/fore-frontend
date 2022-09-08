import api from 'services/xhr';

import { emptySearch } from "components/config/Providers/Store/initial-state";

export default {

	clearSearchResults: ({ search }) => {
		search.ClaimDetailAddClaim = emptySearch;
		return { search };
	},

	async searchClaimsOfUser({ search }, keywords) {

		if (!keywords) return { search };

		const searchResults = await api.searchClaimsOfUser(keywords);

		search.ClaimDetailAddClaim = {
			results: searchResults,
			keywords
		};

		return { search };

	}

};