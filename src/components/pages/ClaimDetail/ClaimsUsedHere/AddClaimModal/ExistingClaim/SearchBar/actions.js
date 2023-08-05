import api from 'services/xhr';

import { emptySearch } from "components/config/Providers/Store/initial-state";

export default {

	clearSearchResults: ({ search }) => {
		// eslint-disable-next-line no-param-reassign
		search.ClaimDetailAddClaim = emptySearch;
		return { search };
	},

	async searchClaimsOfUser({ search, spaces }, keywords) {

		if (!keywords) return { search };

		const searchResults = await api.searchClaimsOfUser({
			keywords,
			spaceId: spaces.find(space => space.isCurrent).id
		});

		// eslint-disable-next-line no-param-reassign
		search.ClaimDetailAddClaim = {
			results: searchResults || [],
			keywords
		};

		return { search };

	}

};