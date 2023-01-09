import { setCurrentSpace } from "actions";

export default {

	setCurrentSpace,

	closeMenus({ menus }) {
		if (!menus.main && !menus.notifications) return;
		menus.main = false;
		menus.notifications = false;
		return { menus };
	}

}