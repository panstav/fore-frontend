import { useMemo } from 'preact/hooks';
import { connect } from 'unistore/preact';

import actions from './actions';

import useModal from 'hooks/use-modal';

import Component from './ShareInvite';

import { urls } from 'constants';

export default connect(mapStateToProps, actions)(ShareInvite);

function ShareInvite({ userFirstName, spaceId, spaceName, createInvitation, invitationId }) {

	const invitationLink = invitationId && `${urls.frontEnd}/space-invitation/${invitationId}`;

	const handleCreateInvitation = () => createInvitation({ spaceId, spaceName });

	const [shareInviteModalProps, showShareInviteModal] = useModal();

	const hasWebShare = useMemo(() => {
		if (!invitationId) return false;

		const spaceWebShareObj = {
			title: `${userFirstName} has invited you to a Space on Fore`,
			text: `Join "${spaceName}" to read, support and oppose existing Claims, and create Claims of your own.`,
			url: invitationLink
		};

		return 'share' in navigator && 'canShare' in navigator && navigator.canShare(spaceWebShareObj)
	}, [userFirstName, spaceId, invitationId]);

	const props = {
		shareInviteModalProps,
		shareInvite: showShareInviteModal,
		hasWebShare,
		invitationLink,
		createInvitation: handleCreateInvitation
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
