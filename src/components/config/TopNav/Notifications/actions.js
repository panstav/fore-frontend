export default {

	toggleNotificationsMenu: ({ menus }) => {
		// eslint-disable-next-line no-param-reassign
		menus.notifications = !menus.notifications;
		return { menus };
	}

};