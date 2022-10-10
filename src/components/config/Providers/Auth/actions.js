import api from 'services/xhr';

export default {

	async identify() {

		let loadedUser;

		try {
			loadedUser = await api.identify();

		} catch (err) {
			console.error(err);
		}

		return { user: loadedUser };
	}

};