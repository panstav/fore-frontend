import { connect } from "unistore/preact";

import isAuth from "lib/is-auth";
import attachHref from "lib/attach-href-to-space";

import { roles } from 'constants';

import Template from './AddSpace';

import spaceTypes from './types.js';

const Component = connect(mapStateToProps)(AddSpace);

// export a simple function instead of a connect() invocation
export default function AddSpaceRender() {
	return <Component />;
}

function AddSpace({ userRole, spaces }) {

	const isAdmin = userRole === roles.ADMIN;

	const hasCreatedBothTypes = !isAdmin
		&& spaces
			.filter((space) => space.userRole === roles.ADMIN)
			.map(({ type }) => type)
			.length === spaceTypes.length;

	const props = {
		hasCreatedBothTypes,
		spaceTypes: spaceTypes
			.filter((type) => {
				if (!('minimumRole' in type)) return true;
				return isAuth(userRole, { minimum: type.minimumRole });
			})
			.map(attachExisting),
	};

	return Template(props);

	function attachExisting(passedType) {
		// let the admin create both types even if they already have a space of that type
		if (isAdmin) return passedType;
		// attach the existing space of this type, if any

		const type = {
			...passedType,
			// look for an existing space of this type
			existingSpace: spaces.find((existingSpace) => existingSpace.type === passedType.name)
		};

		// attach the href to the existing space, if any
		if (type.existingSpace) type.existingSpace = attachHref(type.existingSpace);

		return type;
	}

}

function mapStateToProps({ user, spaces }) {
	return {
		userRole: user.role,
		spaces
	};
}