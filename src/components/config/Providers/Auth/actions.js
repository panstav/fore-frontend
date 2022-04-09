import api from 'services/xhr';

export default {

	async identify({ user }) {

		let loadedUser;

		try {
			loadedUser = await api.identify();

		} catch (err) {
			console.error(err);
			return { loadedUser };
		}

		return { user: Object.assign(loadedUser, user) };
	}

};