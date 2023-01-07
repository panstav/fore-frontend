import { useCallback } from 'preact/compat';
import { useLocation } from 'wouter-preact';
import { connect } from 'unistore/preact';

import attachHref from 'lib/attach-href-to-space';

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

	// avoid rendering dropdown when there is only one Space
	if (availableSpaces.length === 1) return null;

	const props = {
		setCurrentSpace: handleSetCurrentSpace,
		currentSpaceName: currentSpace.name,
		availableSpaces: availableSpaces.map(attachHref),
		isOpenDropdown,
		// ignore event data triggering the toggle
		toggleDropdown: () => toggleDropdown(),
		closeDropdown: handleCloseDropdown
	};

	return Component(props);

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