import { useCallback, useEffect, useRef } from 'preact/compat';
import { useLocation } from 'wouter-preact';
import { connect } from 'unistore/preact';

import useBooleanState from 'hooks/use-boolean-state';

import actions from './actions';

import { spacesSorter } from '../index';
import Component from './SpaceSelector';

export default connect(mapStateToProps, actions)(SpaceSelector);

function SpaceSelector({ currentSpace, setCurrentSpace, spaces, createSpace }) {

	const [isOpenDropdown, , closeDropdown, toggleDropdown] = useBooleanState(false);
	const dropdownRef = useDropdownFocus(closeDropdown);

	const [location, setLocation] = useLocation();
	const handleSetCurrentSpace = useCallback((nextSpaceId) => {
		if (currentSpace !== nextSpaceId) return;
		const nextSpaceUrl = `/space/${currentSpace}`;
		if (location !== nextSpaceUrl) return setLocation(nextSpaceUrl);
		setCurrentSpace(nextSpaceId);
	}, [currentSpace, setLocation]);

	// avoid rendering dropdown when no Space was yet to be determined
	if (!currentSpace) return null;

	const props = {
		setCurrentSpace: handleSetCurrentSpace,
		currentSpaceName: currentSpace.name,
		availableSpaces: spaces.map(attachHref).sort(spacesSorter),
		isOpenDropdown,
		// ignore event data triggering the toggle
		toggleDropdown: () => toggleDropdown(),
		dropdownRef,
		createSpace
	};

	return Component(props);

}

function attachHref(space) {
	// link to the space, unless it's the public space, then link to the homepage
	space.href = space.id === 'public' ? '/' : `/space/${space.id}`;
	return space;
}

function mapStateToProps({ spaces, claims }) {
	const currentSpace = spaces.find((space) => space.isCurrent);
	const currentSpaceObj = currentSpace ? { id: currentSpace.id, name: currentSpace.name } : null;
	return {
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