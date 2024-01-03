import { roles, spaceTypes } from "constants";

export default [
	{
		id: 'public',
		name: 'Public',
		type: spaceTypes.PUBLIC,
		settings: {}
	},
	{
		"id": "private",
		"name": "private space",
		"type": spaceTypes.PRIVATE,
		"userRole": roles.ADMIN,
		settings: {}
	}
];