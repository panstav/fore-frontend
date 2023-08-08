import { useEffect } from "preact/hooks";
import { connect } from "unistore/preact";
import { Redirect } from "wouter-preact";

import Loader from "elements/Loader";

import actions from "./actions";

export default connect(mapStateToProps, actions)(Logout);

function Logout({ isLoggedOut, logOut }) {

	useEffect(() => {
		if (!isLoggedOut) logOut();
	}, []);

	if (isLoggedOut) return <Redirect to="/" />;

	return <Loader />;

}

function mapStateToProps({ user }) {
	return {
		isLoggedOut: !user.id
	};
}