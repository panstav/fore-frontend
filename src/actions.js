import api from 'services/xhr';
import localstorage from 'services/localstorage';
import trackEvents from 'services/track-events';

import notify from 'lib/notify.js';
import scrollBackToTop from 'lib/scroll-back-to-top';

import { store } from 'config/Providers/Store';
import initialState from 'config/Providers/Store/initial-state';

import { notifications } from 'constants.js';

export async function addClaim({ spaces, claims, user }, claim, { avoidNotifications = false } = {}) {

	let notificationId;
	if (!avoidNotifications) notificationId = notify(notifications.NEW_CLAIM_SENT);

	// eslint-disable-next-line no-param-reassign
	claim.spaceId = claim.spaceId || spaces.find((space) => space.isCurrent).id;
	const fullClaim = await api.addClaim(claim);
	if (!fullClaim.isAnonymous) fullClaim.owner = { id: user.id, name: user.name };

	trackEvents('create_claim', { claimId: fullClaim.id, spaceId: claim.spaceId });

	if (!avoidNotifications) notify(notifications.NEW_CLAIM_CREATED, { _id: notificationId, claimId: fullClaim.id });

	claims.push(fullClaim);
	return { claims };
}

export async function createSpace({ spaces }, { space, onSuccess }) {

	// eslint-disable-next-line no-param-reassign
	space.type = space.type || 'shared';

	const fullSpace = await api.addSpace(space);

	trackEvents('create_space', { spaceId: fullSpace.id });

	const updatedSpaces = spaces.concat(fullSpace)
		.map((space) => Object.assign({}, space, { isCurrent: space.id === fullSpace.id }));

	store.setState({ spaces: updatedSpaces });

	if (onSuccess) onSuccess(fullSpace);
}

export function setCurrentSpace({ spaces, claims }, nextSpaceId) {

	if (nextSpaceId) {
		const updatedSpaces = setCurrentBy((space) => space.id === nextSpaceId);
		return { spaces: updatedSpaces };
	}

	// no space was selected from dropdown
	// set the current space to the first requirements satisfier
	const { pathname } = window.location;

	if (pathname === '/') return setToPublic();

	// usually, the resource id is the second part of the url
	// and the first part is the type of the resource
	const [, resourceType, resourceId] = pathname.split('/');

	if (resourceType === 'space') {
		const updatedSpaces = setCurrentBy((space) => space.id === resourceId);
		return { spaces: updatedSpaces };
	}

	if (resourceType === 'claim') {
		const claimId = claims.find((claim) => claim.id === resourceId);
		if (claimId && claimId.spaceId) {
			const updatedSpaces = setCurrentBy((space) => space.id === claimId.spaceId);
			return { spaces: updatedSpaces };
		}
	}

	// assume action will be called again when a space indicator is relevant
	// (e.g. when the user navigates to a space page)
	return {};

	function setToPublic() {
		const updatedSpaces = setCurrentBy((space) => space.id === 'public');
		return { spaces: updatedSpaces };
	}

	function setCurrentBy(fn) {
		return spaces.map((space) => {
			const isCurrent = fn(space);
			if (isCurrent !== true && isCurrent !== false) throw new Error('setCurrentBy first argument must return a boolean');
			return { ...space, isCurrent };
		});
	}

}

export function closeMenus({ menus }) {
	if (!menus.main && !menus.notifications) return;
	// eslint-disable-next-line no-param-reassign
	menus.main = false;
	// eslint-disable-next-line no-param-reassign
	menus.notifications = false;
	return { menus };
}

export async function logOut() {
	await api.logout();
	localstorage.clear();
	scrollBackToTop();
	return initialState;
}

export async function getInvitationDetail({ invitations }, invitationId) {
	const invitation = await api.getInvitationDetail(invitationId);
	if (!invitation) return {};

	const updatedInvitations = invitations.concat(invitation);
	return { invitations: updatedInvitations };
}