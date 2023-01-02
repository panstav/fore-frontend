import { useCallback, useEffect, useRef } from 'preact/compat';
import { useLocation } from 'wouter-preact';
import { connect } from 'unistore/preact';

import useModal from 'hooks/use-modal';
import useBooleanState from 'hooks/use-boolean-state';

import { Plus } from "elements/Icon";

import actions from './actions';

import Component from './SpaceSelector';

export default connect(mapStateToProps, actions)(SpaceSelector);

function SpaceSelector({ currentSpace, setCurrentSpace, availableSpaces, createSpace }) {

	const [isOpenDropdown, , closeDropdown, toggleDropdown] = useBooleanState(false);
	const dropdownRef = useDropdownFocus(closeDropdown);

	const [location, setLocation] = useLocation();
	const handleSetCurrentSpace = useCallback((nextSpaceId) => {
		if (currentSpace !== nextSpaceId) return;
		const nextSpaceUrl = `/space/${currentSpace}`;
		if (location !== nextSpaceUrl) return setLocation(nextSpaceUrl);
		setCurrentSpace(nextSpaceId);
	}, [currentSpace, setLocation]);

	const [newSpaceModalProps, openNewSpaceModal] = useModal({
		onSubmit: async (data) => {
			const spaceId = await createSpace(data);
			setLocation(spaceId);
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
		availableSpaces: availableSpaces.map(attachHref).sort(spacesSort),
		isOpenDropdown,
		// ignore event data triggering the toggle
		toggleDropdown: () => toggleDropdown(),
		dropdownRef,
		newSpaceModalProps,
		createSpace: () => openNewSpaceModal()
	};

	return Component(props);

	function attachHref(space) {
		// link to the space, unless it's the public space, then link to the homepage
		space.href = space.id === 'public' ? '/' : `/space/${space.id}`;
		return space;
	}

}

function mapStateToProps({ spaces, claims }) {
	const currentSpace = spaces.find((space) => space.isCurrent);
	const currentSpaceObj = currentSpace ? { id: currentSpace.id, name: currentSpace.name } : null;
	return {
		currentSpace: currentSpaceObj,
		availableSpaces: spaces,
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
	const aaa = a.name.localeCompare(b.name);
	debugger;
	return aaa;
}