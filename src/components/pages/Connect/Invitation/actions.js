import api from 'services/xhr';

export default {

	getInvitationDetail({ invitations }, invitationId) {
		const invitation = api.getInvitationDetail(invitationId);
		if (!invitation) return {};

		const updatedInvitations = invitations.concat(invitation);
		return { invitations: updatedInvitations };
	}

}