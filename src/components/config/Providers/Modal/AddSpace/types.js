import { SharedSpace, PrivateSpace } from "elements/Icon";

import { spaceTypes } from "constants";

export default [
	{
		name: spaceTypes.SHARED,
		label: "Shared Space",
		description: "Empower group thinking",
		icon: SharedSpace
	},
	{
		name: spaceTypes.PRIVATE,
		label: "Private Space",
		description: "Think for yourself",
		icon: PrivateSpace
	}
];