import { roles } from "constants";

const initialSpaces = [
	{
		id: 'public',
		name: 'Public',
		tag: 'Closed Beta',
		minRole: roles.ADMIN
	},
	{
		id: 'demo',
		name: 'Demo'
	}
];

export const emptySearch = {
	keywords: '',
	results: []
};

export default {

	user: {},

	spaces: initialSpaces,

	claims: [],

	search: {
		ClaimDetailAddClaim: emptySearch
	}

};