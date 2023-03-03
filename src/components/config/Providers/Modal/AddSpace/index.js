import { connect } from "unistore/preact";

import { SharedSpace, PrivateSpace } from "elements/Icon";

import { roles } from 'constants';

import Template from './AddSpace';

const spaceTypes = [
	{
		name: "shared",
		label: "Shared Space",
		description: "Empower group thinking",
		icon: SharedSpace
	},
	{
		name: "private",
		label: "Private Space",
		description: "Think for yourself",
		icon: PrivateSpace
	}
];

const Component = connect(mapStateToProps)(AddSpace);

// export a simple function instead of a connect() invocation
export default function AddSpaceRender() {
	return <Component />;
}

function AddSpace({ isAdmin, spaces }) {

	const hasCreatedBothTypes = !isAdmin && spaces.filter((space) => space.userRole === roles.ADMIN).map(({ type }) => type).length === spaceTypes.length;

	const props = {
		hasCreatedBothTypes,
		spaceTypes: spaceTypes.map(attachExisting),
	};

	return Template(props);

	function attachExisting(type) {
		// let the admin create both types even if they already have a space of that type
		if (isAdmin) return type;
		// attach the existing space of this type, if any
		type.existingSpace = spaces.find((existingSpace) => existingSpace.type === type.name);
		return type;
	}

}

function mapStateToProps({ user, spaces }) {
	return {
		isAdmin: user.role === roles.ADMIN,
		spaces
	};
}