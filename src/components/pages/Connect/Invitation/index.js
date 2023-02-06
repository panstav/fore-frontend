import { useEffect } from 'preact/hooks';
import { connect } from 'unistore/preact';

import localstorage from 'services/localstorage';

import actions from './actions';

import SpaceInvitationNotice from 'elements/SpaceInvitationNotice';

import { localStorageKeys } from 'constants';

export default (props) => {

	// check whether the user has an invitation
	const invitationId = /^\/space-invitation\/(?<invitationId>.+)/.exec(localstorage.get(localStorageKeys.redirectTo, ''))?.groups?.invitationId;

	if (!invitationId) return null;

	props.invitationId = invitationId;

	return Component(props);
};

const Component = connect(mapStateToProps, actions)(Invitation);

function Invitation({ invitationId, getInvitationDetail, invitationDetail, className }) {

	useEffect(() => {
		// get the space name by querying it using the invitation as id
		if (!invitationDetail) getInvitationDetail(invitationId);
	}, [invitationDetail, invitationId, getInvitationDetail]);

	if (!invitationDetail) return null;

	const inviterName = invitationDetail.inviterName.split(' ')[0];

	return <SpaceInvitationNotice
		inviter={inviterName}
		space={invitationDetail.spaceName}
		className={className}
	/>;
}

function mapStateToProps({ invitations }, { invitationId }){

	const invitationDetail = invitations.find((invitation) => invitation.id === invitationId);
	if (!invitationDetail) return {};

	return {
		invitationDetail
	};
}