import api from "services/xhr";

import notify from "lib/notify";

import { notifications } from "constants";

export default {

	async setupDebateSpace({ spaces }, { spaceId, startTime, quarterLength }) {

		await api.setSpaceSettings({ spaceId, startTime, quarterLength });

		notify(notifications.SPACE_SETTINGS_SET);

		spaces.map(space => {
			if (space.id !== spaceId) return space;

			// eslint-disable-next-line no-param-reassign
			space.settings = {
				startTime,
				quarterLength
			};
			return space;
		});

		return { spaces };

	}

}