import { connect } from "unistore/preact";

import Component from "./LoggedIn";

export default connect(mapStateToProps)(LoggedIn);

function LoggedIn({ userName, spaces: availableSpaces }) {

	const spaces = availableSpaces
		.sort(spaceSorter)
		.map(attachLinkTo);

	const props = {
		userName: userName.split(" ")[0],
		spaces
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
	return {
		...space,
		link: `/space/${space.slug || space.id}`
	};
}