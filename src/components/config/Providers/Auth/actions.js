import api from 'services/xhr';

export default {

	async identify({ user }) {
		const { user: loadedUser, spaces } = await api.identify();
		const updatedUser = Object.assign({}, user, loadedUser);
		return { user: updatedUser, spaces };
	}

};