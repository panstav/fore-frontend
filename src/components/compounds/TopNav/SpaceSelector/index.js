import { useCallback, useEffect } from 'preact/hooks';
import { connect } from 'unistore/preact';

import isAuth from 'lib/is-auth';

import useBooleanState from 'hooks/use-boolean-state';

import Component from './SpaceSelector';

export default connect(mapStateToProps)(SpaceSelector);

function SpaceSelector({ currentSpace, availableSpaces }) {

	const [isOpenDropdown,, closeDropdown, toggleDropdown] = useBooleanState(false);
	const handleCloseDropdown = useCallback((event) => {
		if (event.relatedTarget && event.relatedTarget.classList.contains('dropdown-item')) return;
		closeDropdown();
	}, [closeDropdown]);

	// avoid rendering dropdown when not Space was yet to be determined
	if (!currentSpace) return null;

	useEffect(() => {
		// ensure that the dropdown is closed when the user navigates
		closeDropdown();
	}, [currentSpace.id]);

	const props = {
		currentSpaceName: currentSpace.name,
		availableSpaces,
		isOpenDropdown,
		// ignore event data triggering the toggle
		toggleDropdown: () => toggleDropdown(),
		closeDropdown: handleCloseDropdown
	};

	return Component(props);
}

function mapStateToProps({ user, spaces }) {

	const currentSpace = spaces.available.find((space) => space.id === spaces.currentId);

	return {
		currentSpace,
		availableSpaces: spaces.available.map(attachHrefDisabled)
	};

	function attachHrefDisabled(space) {
		// item should appear unclickable to unauthenticated users
		space.disabled = !isAuth(user.role, { minimum: space.minRole });
		// disabled items + the items that directs here don't need a link
		space.href = (space.disabled || (currentSpace && space.id === currentSpace.id))
			? null
			// link to the space, unless it's the public space, then link to the home page
			: space.id === 'public' ? '/' : `/space/${space.id}`;

		return space;
	}

}