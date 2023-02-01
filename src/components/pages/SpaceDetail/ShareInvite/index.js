import { useMemo } from 'preact/hooks';
import { connect } from 'unistore/preact';

import useModal from 'hooks/use-modal';

import Component from './ShareInvite';

import { urls } from 'constants';

export default connect(mapStateToProps)(ShareInvite);

function ShareInvite({ userFirstName, spaceId, spaceName, createInvitation, invitationId }) {

	const invitationLink = `${urls.frontEnd}/space/${spaceId}?invitation=${invitationId}`;

	const [shareInviteModalProps, showShareInviteModal] = useModal();

	const hasWebShare = useMemo(() => {
		if (!invitationId) return false;

		const spaceWebShareObj = {
			title: `Join ${userFirstName}'s Space on Fore`,
			text: `${userFirstName} has invited you to join their Space on Fore. Join to read, support and oppose existing Claims, and create Claims of your own.`,
			url: invitationLink
		};

		return 'share' in navigator && 'canShare' in navigator && navigator.canShare(spaceWebShareObj)
	}, [userFirstName, spaceId, invitationId]);

	if (!invitationId) createInvitation({ spaceId, spaceName });

	const props = {
		shareInviteModalProps,
		shareInvite: showShareInviteModal,
		hasWebShare,
		invitationLink
	};

	return Component(props);

}

function mapStateToProps({ user, spaces, invitations }) {

	const space = spaces.find(space => space.isCurrent);
	const { id: spaceId, name: spaceName } = space;

	const invitationId = invitations.find(invite => invite.spaceId === spaceId)?.invitationId;
	
	return {
		userFirstName: user.name.split(' ')[0],
		spaceId,
		spaceName,
		invitationId
	};
}
