import { SharedSpace, PrivateSpace, DebateSpace } from "elements/Icon";

import { spaceTypes, roles } from "constants";

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
	},
	{
		name: spaceTypes.DEBATE,
		label: "Debate Space",
		description: "Start a debate event",
		icon: (props) => <div><DebateSpace {...props} svgProps={{ style: { width: '60%' } }} /></div>,
		minimumRole: roles.ADMIN
	}
];