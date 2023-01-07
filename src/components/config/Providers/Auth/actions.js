import api from 'services/xhr';

export default {

	async identify() {
		const { user = {}, spaces = [], notifications = [] } = await api.identify();

		// mark public as the current space if no other space is current
		if (!spaces.find((space) => space.isCurrent)) {
			spaces.find((space) => space.id === 'public').isCurrent = true;
		}

		return { user, spaces, notifications };
	}

};