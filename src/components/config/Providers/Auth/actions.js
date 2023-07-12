import api from 'services/xhr';

export default {

	async identify() {
		const { user = {}, spaces = [], notifications: unsortedNotifications = [] } = await api.identify();
		const notifications = unsortedNotifications.sort((a, b) => b.payload.createdAt - a.payload.createdAt);

		return { user, spaces, notifications };
	}

};