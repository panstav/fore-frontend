import { connect } from 'unistore/preact';
import { useLocation } from 'wouter-preact';

import isAuth from 'lib/is-auth';

import Component from './TopNav';

import { roles } from 'constants';

export default connect(mapStateToProps)(TopNav);

function TopNav({ isBetaOrAbove }) {
	// don't show the top nav if we're viewing the promotional homepage
	const [location] = useLocation();
	if (location === '/connect' || (!isBetaOrAbove && location === '/')) return null;

	return Component();
}

function mapStateToProps({ user }) {
	return {
		isBetaOrAbove: isAuth(user.role, { minimum: roles.MEMBER_BETA })
	};
}