import { connect } from 'unistore/preact';
import { useLocation } from 'wouter-preact';

import isAuth from 'lib/is-auth';

import useModal from 'hooks/use-modal';

import { SharedSpace, PrivateSpace } from "elements/Icon";

import Component from './TopNav';

import actions from './actions';

import { roles } from 'constants';

const spaceTypes = [
	{
		name: "shared",
		label: "Shared Space",
		description: "Empower group thinking",
		icon: SharedSpace
	},
	{
		name: "private",
		label: "Private Space",
		description: "Think for yourself",
		icon: PrivateSpace
	}
];

export default connect(mapStateToProps, actions)(TopNav);

function TopNav({ isMemberOrAbove, isAdmin, isMenuOpen, isNotificationsOpen, toggleMainMenu, createSpace, spaces }) {

	// don't show the top nav if we're viewing the promotional homepage
	const [location, setLocation] = useLocation();
	if (location === '/connect' || (!isMemberOrAbove && location === '/')) return null;

	const hasCreatedBothTypes = !isAdmin && spaces.filter((space) => space.userRole === roles.ADMIN).map(({ type }) => type).length === spaceTypes.length;
	const [newSpaceModalProps, openNewSpaceModal] = useModal({
		hasCreatedBothTypes,
		spaceTypes: spaceTypes.map(attachExisting),
		onSubmit: (data) => createSpace({
			space: data,
			goToSpace: (spaceId) => setLocation(`/space/${spaceId}`)
		})
	});

	const props = {
		isMenuOpen,
		isNotificationsOpen,
		toggleMainMenu,
		createSpace: () => openNewSpaceModal(),
		newSpaceModalProps
	};

	return Component(props);

	function attachExisting(type) {
		// let the admin create both types even if they already have a space of that type
		if (isAdmin) return type;
		// attach the existing space of this type, if any
		type.existingSpace = spaces.find((existingSpace) => existingSpace.type === type.name);
		return type;
	}

}

function mapStateToProps({ user, menus, spaces }) {
	const currentSpace = spaces.find((space) => space.isCurrent);
	return {
		isAdmin: user.role === roles.ADMIN,
		currentSpace,
		isMemberOrAbove: isAuth(user.role, { minimum: roles.MEMBER }),
		isMenuOpen: menus.main,
		isNotificationsOpen: menus.notifications,
		spaces
	};
}

export function spacesSorter(a, b) {
	// 'public' is always first
	if (a.id === 'public') return -1;
	if (b.id === 'public') return 1;
	// then sort by name
	return a.name.localeCompare(b.name);
}