import { connect } from 'unistore/preact';
import { useLocation } from 'wouter-preact';

import isAuth from 'lib/is-auth';

import Component from './TopNav';

import { roles } from 'constants';

export default connect(mapStateToProps)(TopNav);

function TopNav({ isMemberOrAbove }) {
	// don't show the top nav if we're viewing the promotional homepage
	const [location] = useLocation();
	if (location === '/connect' || (!isMemberOrAbove && location === '/')) return null;

	return Component();
}

function mapStateToProps({ user }) {
	return {
		isMemberOrAbove: isAuth(user.role, { minimum: roles.MEMBER })
	};
}