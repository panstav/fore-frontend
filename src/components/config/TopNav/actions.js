import api from 'services/xhr';
import trackEvents from 'services/track-events';

import notify from 'lib/notify';

import { notifications } from 'constants';

export default {

	toggleMainMenu: ({ menus }) => {
		menus.main = !menus.main;
		return { menus };
	},

	async createSpace({ spaces }, space) {
		space.type = space.type || 'shared';

		const notificationId = notify(notifications.NEW_SPACE_SENT);

		const fullSpace = await api.addSpace(space);

		trackEvents('create_space', { spaceId: fullSpace.id });

		notify(notifications.NEW_SPACE_CREATED, { _id: notificationId, spaceId: fullSpace.id });

		spaces.push(fullSpace);
		return { spaces };
	}

}