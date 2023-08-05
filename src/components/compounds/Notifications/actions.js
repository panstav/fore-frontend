import api from "services/xhr";

export default {

	async loadMoreNotifications({ notifications }) {
		if (!notifications.length) throw new Error('No notifications');

		const queryNotificationsBefore = notifications.sort((a, b) => a.payload.createdAt - b.payload.createdAt)[0].payload.createdAt;

		const { notifications: newNotifications, isLastBatch } = await api.getNotificationsBefore({ time: queryNotificationsBefore });

		// while store.notification is an array, we'll mark one of the notification with isLastBatch
		// eslint-disable-next-line no-param-reassign
		if (isLastBatch) notifications[0].isLastBatch = true;

		const updatedNotifications = notifications.concat(newNotifications).sort((a, b) => b.payload.createdAt - a.payload.createdAt);

		return {
			notifications: updatedNotifications
		};
	}

};