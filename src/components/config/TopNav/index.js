import { connect } from 'unistore/preact';
import { useLocation } from 'wouter-preact';

import isAuth from 'lib/is-auth';

import useCreateSpace from 'hooks/use-create-space';

import Component from './TopNav';

import actions from './actions';

import { roles } from 'constants';

export default connect(mapStateToProps, actions)(TopNav);

function TopNav({ currentSpace, isMemberOrAbove, isMenuOpen, isNotificationsOpen, toggleMainMenu }) {

	// don't show the top nav if
	const [location] = useLocation();
	// we're viewing the connect page
	if (location === '/connect'
	// we're viewing the promotional homepage and we're not logged in
	|| (!isMemberOrAbove && location === '/')) return null;

	const handleCreateSpace = useCreateSpace();

	let homeButtonHref = '/';
	if (currentSpace?.id && currentSpace?.id !== 'public') homeButtonHref = `/space/${currentSpace.id}`;
	if (location === homeButtonHref) homeButtonHref = null;

	const props = {
		homeButtonHref,
		isMenuOpen,
		isLoggedIn: isMemberOrAbove,
		isNotificationsOpen,
		toggleMainMenu,
		createSpace: handleCreateSpace
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

export function spacesSorter(a, b) {
	// 'public' is always first
	if (a.id === 'public') return -1;
	if (b.id === 'public') return 1;
	// then sort by name
	return a.name.localeCompare(b.name);
}