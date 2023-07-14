import api from 'services/xhr';
import disableEventTracking from 'lib/disable-event-tracking';

import { roles } from 'constants';

export default {

	async identify() {
		const { user = {}, spaces = [], notifications: unsortedNotifications = [] } = await api.identify();
		const notifications = unsortedNotifications.sort((a, b) => b.payload.createdAt - a.payload.createdAt);

		// if user is an admin - disable event tracking
		if (user.role === roles.ADMIN) disableEventTracking();

		return { user, spaces, notifications };
	}

};