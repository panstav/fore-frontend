export default {

	toggleNotificationsMenu: ({ menus }) => {
		menus.notifications = !menus.notifications;
		return { menus };
	}

}