import api from 'services/xhr';

import { getInvitationDetail } from 'actions';

export default {

	getInvitationDetail,

	async acceptInvitation({ spaces }, invitationId) {

		const newSpace = await api.acceptSpaceInvitation(invitationId);

		const updatedSpaces = spaces.concat(newSpace);
		return { spaces: updatedSpaces };
	}

};