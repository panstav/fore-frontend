import { connect } from "unistore/preact";

import cloneDeep from "lodash.clonedeep";

import actions from "./actions";

import Component from "./MobileMenu";

export default connect(mapStateToProps, actions)(MobileMenu);

function MobileMenu({ userName = '', ...passedProps }) {

	const props = Object.assign({}, cloneDeep(passedProps), {
		userFirstName: userName.split(' ')[0]
	});

	return Component(props);

}

function mapStateToProps({ user }) {
	return {
		userName: user.name,
	};
}