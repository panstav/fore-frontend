import { connect } from 'unistore/preact';

import actions from './actions';

export default connect(mapStateToProps, actions)(Invitation);

function Invitation({ getInvitationDetail, invitationSpaceName }) {

	// check whether the user has an invitation
	const searchParams = new URLSearchParams(window.location.search);
	const invitationId = searchParams.get('invitation');
	if (invitationId && !invitationSpaceName) {
		// get the space name by querying it using the invitation as id
		getInvitationDetail(invitationId);
	}

	if (!invitationSpaceName) return null;

	return <p>
		You've got an invitation from&nbsp;
			<span className='has-text-primary has-text-weight-bold'>{invitationSpaceName}</span>.
	</p>;
}

function mapStateToProps({ invitations }, props) {
	debugger;

	const invitationSpaceName = invitations.find((invitation) => invitation.id === props.invitationId)?.spaceName;
	return {
		invitationSpaceName
	};
}