export default {

	closeMenus({ menus }) {
		if (!menus.main && !menus.notifications) return;
		menus.main = false;
		menus.notifications = false;
		return { menus };
	}

}