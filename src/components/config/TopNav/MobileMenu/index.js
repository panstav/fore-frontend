import { connect } from "unistore/preact";

import Component from "./MobileMenu";

export default connect(mapStateToProps)(MobileMenu);

function MobileMenu({ userName = '' }) {

	const props = {
		userFirstName: userName.split(' ')[0]
	};

	return Component(props);

}

function mapStateToProps({ user }) {
	return {
		userName: user.name,
	};
}