import { useCallback } from 'preact/compat';
import { useLocation } from 'wouter-preact';
import { connect } from 'unistore/preact';

import isAuth from 'lib/is-auth';

import useBooleanState from 'hooks/use-boolean-state';

import actions from './actions';

import Component from './SpaceSelector';

export default connect(mapStateToProps, actions)(SpaceSelector);

function SpaceSelector({ currentSpace, setCurrentSpace, availableSpaces, userRole }) {

	const [isOpenDropdown,, closeDropdown, toggleDropdown] = useBooleanState(false);
	const handleCloseDropdown = useCallback((event) => {
		if (event.relatedTarget && event.relatedTarget.classList.contains('dropdown-item')) return;
		closeDropdown();
	}, [closeDropdown]);

	const [location, setLocation] = useLocation();

	const handleSetCurrentSpace = useCallback((nextSpaceId) => {
		if (currentSpace !== nextSpaceId) return;
		const nextSpaceUrl = `/space/${currentSpace}`;
		if (location !== nextSpaceUrl) return setLocation(nextSpaceUrl);
		setCurrentSpace(nextSpaceId);
	}, [currentSpace, setLocation]);

	// avoid rendering dropdown when no Space was yet to be determined
	if (!currentSpace){
		setCurrentSpace();
		return null;
	}

	const props = {
		setCurrentSpace: handleSetCurrentSpace,
		currentSpaceName: currentSpace.name,
		availableSpaces: availableSpaces.map(attachHrefDisabled),
		isOpenDropdown,
		// ignore event data triggering the toggle
		toggleDropdown: () => toggleDropdown(),
		closeDropdown: handleCloseDropdown
	};

	return Component(props);

	function attachHrefDisabled(space) {
		// item should appear unclickable to unauthenticated users
		space.disabled = !isAuth(userRole, { minimum: space.minRole });
		// disabled items + the items that direct to the current page - don't need a link
		space.href = space.disabled
			? null
			// link to the space, unless it's the public space, then link to the home page
			: space.id === 'public' ? '/' : `/space/${space.id}`;

		return space;
	}

}

function mapStateToProps({ user, spaces, claims }) {
	const currentSpace = spaces.find((space) => space.isCurrent);
	const currentSpaceObj = currentSpace ? { id: currentSpace.id, name: currentSpace.name } : null;
	return {
		userRole: user.role,
		currentSpace: currentSpaceObj,
		availableSpaces: spaces,
		// just to trigger a re-render when the user first navigates to a claim page
		gotClaims: !!claims.length
	};
}