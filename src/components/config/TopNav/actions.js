export default {

	toggleMainMenu: ({ menus }) => {
		menus.main = !menus.main;
		return { menus };
	}

};