import { useCallback, useEffect } from 'preact/hooks';
import { connect } from 'unistore/preact';

import isAuth from 'lib/is-auth';

import useBooleanState from 'hooks/use-boolean-state';

import Component from './SpaceSelector';

export default connect(mapStateToProps)(SpaceSelector);

function SpaceSelector({ currentSpace, availableSpaces, userRole }) {

	const [isOpenDropdown,, closeDropdown, toggleDropdown] = useBooleanState(false);
	const handleCloseDropdown = useCallback((event) => {
		if (event.relatedTarget && event.relatedTarget.classList.contains('dropdown-item')) return;
		closeDropdown();
	}, [closeDropdown]);

	useEffect(() => {
		// ensure that the dropdown is closed when the user navigates
		closeDropdown();
	}, [currentSpace.id]);

	const props = {
		currentSpaceName: currentSpace.name,
		availableSpaces: availableSpaces,
		isOpenDropdown,
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
		space.href = `/space/${space.id}`;
		space.disabled = space.id === currentSpace.id || !isAuth(user.role, { minimum: space.minRole });
		return space;
	}

}