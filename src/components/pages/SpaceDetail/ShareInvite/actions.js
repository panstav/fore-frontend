import api from "services/xhr";

export default {

	async createInvitation({ invitations }, { spaceId, spaceName }) {

		const { invitationId } = await api.createInvitation({ spaceId, spaceName });

		const updatedInvitations = invitations.concat({
			spaceId,
			invitationId,
			spaceName
		});

		return { invitations: updatedInvitations };
	}

};