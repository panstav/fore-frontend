import { useCallback, useEffect, useRef } from 'preact/compat';
import { useLocation } from 'wouter-preact';
import { connect } from 'unistore/preact';

import useModal from 'hooks/use-modal';
import useBooleanState from 'hooks/use-boolean-state';

import { SharedSpace, PrivateSpace } from "elements/Icon";

import actions from './actions';

import Component from './SpaceSelector';

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

export default connect(mapStateToProps, actions)(SpaceSelector);

function SpaceSelector({ isAdmin, currentSpace, setCurrentSpace, spaces, createSpace }) {

	const [isOpenDropdown, , closeDropdown, toggleDropdown] = useBooleanState(false);
	const dropdownRef = useDropdownFocus(closeDropdown);

	const [location, setLocation] = useLocation();
	const handleSetCurrentSpace = useCallback((nextSpaceId) => {
		if (currentSpace !== nextSpaceId) return;
		const nextSpaceUrl = `/space/${currentSpace}`;
		if (location !== nextSpaceUrl) return setLocation(nextSpaceUrl);
		setCurrentSpace(nextSpaceId);
	}, [currentSpace, setLocation]);

	const hasCreatedBothTypes = !isAdmin && spaces.filter((space) => space.userRole === roles.ADMIN).map(({ type }) => type).length === spaceTypes.length;
	const [newSpaceModalProps, openNewSpaceModal] = useModal({
		hasCreatedBothTypes,
		spaceTypes: spaceTypes.map(attachExisting),
		onSubmit: async (data) => {
			const spaceId = await createSpace(data);
			setLocation(`/space/${spaceId}`);
		}
	});

	// avoid rendering dropdown when no Space was yet to be determined
	if (!currentSpace){
		setCurrentSpace();
		return null;
	}

	const props = {
		setCurrentSpace: handleSetCurrentSpace,
		currentSpaceName: currentSpace.name,
		availableSpaces: spaces.map(attachHref).sort(spacesSort),
		isOpenDropdown,
		// ignore event data triggering the toggle
		toggleDropdown: () => toggleDropdown(),
		dropdownRef,
		newSpaceModalProps,
		createSpace: () => openNewSpaceModal()
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

function attachHref(space) {
	// link to the space, unless it's the public space, then link to the homepage
	space.href = space.id === 'public' ? '/' : `/space/${space.id}`;
	return space;
}

function mapStateToProps({ spaces, claims, user }) {
	const currentSpace = spaces.find((space) => space.isCurrent);
	const currentSpaceObj = currentSpace ? { id: currentSpace.id, name: currentSpace.name } : null;
	return {
		isAdmin: user.role === roles.ADMIN,
		currentSpace: currentSpaceObj,
		spaces,
		// just to trigger a re-render when the user first navigates to a claim page
		gotClaims: !!claims.length
	};
}

function useDropdownFocus(cb) {

	const ref = useRef();

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [ref, cb]);

	return ref;

	function handleClickOutside(event) {
		if (ref.current && !ref.current.contains(event.target)) cb();
	}

}

function spacesSort (a, b) {
	// 'public' is always first
	if (a.id === 'public') return -1;
	if (b.id === 'public') return 1;
	// then sort by name
	return a.name.localeCompare(b.name);
}