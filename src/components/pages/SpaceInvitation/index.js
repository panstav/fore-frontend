import { useEffect } from 'preact/hooks';
import { connect } from 'unistore/preact';
import { Redirect } from 'wouter-preact';

import Loader from 'elements/Loader';

import actions from './actions';

import Component from './SpaceInvitation';

export default connect(mapStateToProps, actions)(SpaceInvitation);

function SpaceInvitation({ params: { invitationId }, memberOfSpace, getInvitationDetail, invitationDetail, acceptInvitation }) {

	useEffect(() => {
		// get the space name by querying it using the invitation as id
		if (!invitationDetail) getInvitationDetail(invitationId);
	}, [invitationDetail, invitationId]);
debugger;

	// redirect to homepage if we don't have an invitation
	if (!invitationId) return <Redirect to='/' replace={true} />;
	// redirect to space if we're already a member
	if (memberOfSpace) return <Redirect to={`/space/${invitationDetail.spaceId}`} replace={true} />;

	if (!invitationDetail) return <Loader />;

	const props = {
		inviter: invitationDetail.inviterName,
		space: invitationDetail.spaceName,
		acceptInvitation: () => acceptInvitation(invitationId)
	};

	return Component(props);
}

function mapStateToProps({ spaces, invitations }, { params: { invitationId } }) {

	const invitationDetail = invitations.find((invitation) => invitation.id === invitationId);
	if (!invitationDetail) return {};

	// check whether the user is already a member of the space
	const memberOfSpace = invitationDetail.spaceId && spaces.find((space) => space.id === invitationDetail.spaceId);
debugger;

	return {
		invitationDetail,
		memberOfSpace
	};
}