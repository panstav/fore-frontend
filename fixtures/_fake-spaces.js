import { spaceTypes } from "constants";

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
		"userRole": "ADMIN",
		settings: {}
	},
	{
		"id": "debate",
		"name": "debate space",
		"type": spaceTypes.DEBATE,
		"userRole": "ADMIN",
		settings: {}
	},
	{
		"id": "unset-debate",
		"name": "unset debate space",
		"type": spaceTypes.DEBATE,
		"userRole": "ADMIN",
		settings: {
			startTime: '20:00',
			quarterLength: 15,
		}
	}
];