import { connect } from "unistore/preact";

import actions from "./actions";

import Component from "./LoggedIn";

export default connect(mapStateToProps, actions)(LoggedIn);

function LoggedIn({ userName, spaces: availableSpaces, logOut }) {

	const spaces = availableSpaces
		.sort(spaceSorter)
		.map(attachLinkTo);

	const props = {
		userName: userName.split(" ")[0],
		spaces,
		logOut
	};

	return Component(props);

}

function mapStateToProps({ user, spaces }) {
	return {
		userName: user.name,
		spaces
	};
}

function spaceSorter(a, b) {
	if (a.name.toLowerCase().includes('public')) return -1;
	if (b.name.toLowerCase().includes('public')) return 1;
	return a.name.localeCompare(b.name);
}

function attachLinkTo(space) {
	space.link = space.slug || space.id;
	return space;
}