import { connect } from "unistore/preact";

import actions from "./actions";

import Component from "./MobileMenu";

export default connect(mapStateToProps, actions)(MobileMenu);

function MobileMenu({ userName = '', ...props }) {

	props.userFirstName = userName.split(' ')[0];

	return Component(props);

}

function mapStateToProps({ user }) {
	return {
		userName: user.name,
	};
}