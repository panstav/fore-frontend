import { roles } from "constants";

export const emptySearch = {
	keywords: '',
	results: []
};

export default {

	user: {},

	spaces: {
		currentId: null,
		available: [
			{ id: 'public', name: 'Public', tag: 'Closed Beta', minRole: roles.ADMIN },
			{ id: 'demo', name: 'Demo', }
		]
	},

	claims: [],

	search: {
		ClaimDetailAddClaim: emptySearch
	},

	flags: {
		fetchedLatest: false
	}

};