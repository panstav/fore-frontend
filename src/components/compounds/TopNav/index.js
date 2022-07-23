import { connect } from 'unistore/preact';
import { useLocation } from 'wouter-preact';

import isAuth from 'lib/is-auth';

import Component from './TopNav';

export default connect(mapStateToProps)(TopNav);

function TopNav({ isLoggedOut }) {

	const [location] = useLocation();

	// don't show the top nav if we're viewing the promotional homepage
	if ((location === '/') && isLoggedOut) return null;

	return Component();
}

function mapStateToProps({ user }) {
	return {
		isLoggedOut: isAuth(user.role, { only: 'GUEST' })
	};
}