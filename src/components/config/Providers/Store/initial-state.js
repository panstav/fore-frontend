import { roles } from "constants";

let currentSpaceId = 'demo';
if (process.env.NODE_ENV === 'offline') currentSpaceId = 'public';

const initialSpaces = [
	{ id: 'public', name: 'Public', tag: 'Closed Beta', minRole: roles.ADMIN },
	{ id: 'demo', 	name: 'Demo', }
];

export const emptySearch = {
	keywords: '',
	results: []
};

export default {

	user: {},

	spaces: {
		currentId: currentSpaceId,
		available: initialSpaces
	},

	claims: [],

	search: {
		ClaimDetailAddClaim: emptySearch
	},

	flags: {
		fetchedLatest: false
	}

};