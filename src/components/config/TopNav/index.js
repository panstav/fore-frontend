import { connect } from 'unistore/preact';
import { useLocation } from 'wouter-preact';

import isAuth from 'lib/is-auth';

import Component from './TopNav';

import actions from './actions';

import { roles } from 'constants';

export default connect(mapStateToProps, actions)(TopNav);

function TopNav({ isMemberOrAbove, isMenuOpen, isNotificationsOpen, toggleMainMenu }) {

	// don't show the top nav if we're viewing the promotional homepage
	const [location] = useLocation();
	if (location === '/connect' || (!isMemberOrAbove && location === '/')) return null;

	const props = {
		isMenuOpen,
		isNotificationsOpen,
		toggleMainMenu
	};

	return Component(props);
}

function mapStateToProps({ user, menus, spaces }) {
	const currentSpace = spaces.find((space) => space.isCurrent);
	return {
		currentSpace,
		isMemberOrAbove: isAuth(user.role, { minimum: roles.MEMBER }),
		isMenuOpen: menus.main,
		isNotificationsOpen: menus.notifications
	};
}