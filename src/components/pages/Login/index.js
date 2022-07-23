import { connect } from 'unistore/preact';
import { Redirect } from 'wouter-preact';

import isAuth from 'lib/is-auth';

import Component from './Login';

import { roles } from 'constants.js';

export default connect(mapStateToProps)(Login);

function Login({ isLoggedIn }) {

	// redirect a user to the homepage if they are already logged in
	if (isLoggedIn) return <Redirect to={'/'} replace={true} />;

	return Component();
}

function mapStateToProps({ user }) {
	return {
		isLoggedIn: isAuth(user.role, { minimum: roles.order[1] })
	};
}