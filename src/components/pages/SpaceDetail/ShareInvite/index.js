import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { connect } from 'unistore/preact';

import QrCreator from 'qr-creator';

import { copy } from 'services/clipboard';
import { canShare, share } from 'services/webshare';

import withContext from 'lib/with-context';
import { primaryColor } from 'lib/css';

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

	const qrRef = useRef();

	const [shareInviteModalProps, showShareInviteModal] = useModal();

	const [hasSelectedAllOnce, setHasSelectedAllOnce] = useState(false);
	const selectEntireLink = useCallback((e) => {
		if (hasSelectedAllOnce) return;
		setHasSelectedAllOnce(true);
		e.target.select();
	}, [hasSelectedAllOnce]);

	useEffect(() => {

		// avoid rendering if there is no invitation link or a ref to the qr container element
		if (!invitationLink || !qrRef.current) return;

		QrCreator.render({
			text: invitationLink,
			radius: 0.25, // 0.0 to 0.5
			ecLevel: 'H', // L, M, Q, H
			fill: primaryColor, // foreground color
			background: null, // color or null for transparent
			size: 256 // in pixels
		}, qrRef.current);
	}, [invitationLink, qrRef.current]);

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
		spaceMaxParticipants,
		qrRef
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
