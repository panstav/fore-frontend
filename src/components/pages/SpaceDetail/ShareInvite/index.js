import { useCallback, useMemo, useState } from 'preact/hooks';
import { connect } from 'unistore/preact';

import { copy } from 'services/clipboard';
import { canShare, share } from 'services/webshare';

import withContext from 'lib/with-context';

import { SpaceDetailContext } from 'contexts';

import { urls, spaceMaxParticipants } from 'constants';

import useModal from 'hooks/use-modal';

import actions from './actions';

import Component from './ShareInvite';

export default withContext({
	context: SpaceDetailContext,
	map: ({ id, name, participants }) => ({ spaceId: id, spaceName: name, participants }),
	component: connect(mapStateToProps, actions)(ShareInvite)
});

function ShareInvite({ ButtonComponent, numberOfParticipants, spaceId, spaceName, createInvitation, invitationId, userFirstName }) {

	const invitationLink = invitationId && `${urls.frontEnd}/space-invitation/${invitationId}`;

	const handleCreateInvitation = () => {
		if (numberOfParticipants < spaceMaxParticipants) createInvitation({ spaceId, spaceName });
	};

	const [shareInviteModalProps, showShareInviteModal] = useModal();

	const [hasSelectedAllOnce, setHasSelectedAllOnce] = useState(false);
	const selectEntireLink = useCallback((e) => {
		if (hasSelectedAllOnce) return;
		setHasSelectedAllOnce(true);
		e.target.select();
	}, [hasSelectedAllOnce]);

	const copyUrl = () => copy(invitationLink);

	const webShareObject = {
		title: `${userFirstName} has invited you to a Space on Fore`,
		text: `Join "${spaceName}" to read, support and oppose existing Claims, and create Claims of your own.`,
		url: invitationLink
	};
	const hasWebShare = useMemo(() => canShare(webShareObject), []);
	const webShare = () => share(webShareObject);

	const props = {
		ButtonComponent,
		shareInviteModalProps,
		shareInvite: showShareInviteModal,
		hasWebShare,
		invitationLink,
		createInvitation: handleCreateInvitation,
		selectEntireLink,
		copyUrl,
		webShare,
		numberOfParticipants,
		spaceMaxParticipants
	};

	return Component(props);

}

function mapStateToProps({ user, invitations }, { spaceId, participants }) {

	const invitationId = invitations.find(invite => invite.spaceId === spaceId)?.invitationId;

	return {
		userFirstName: user.name.split(' ')[0],
		invitationId,
		numberOfParticipants: participants.length
	};
}
