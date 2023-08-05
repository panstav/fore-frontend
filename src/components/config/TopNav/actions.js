export default {

	toggleMainMenu: ({ menus }) => {
		// eslint-disable-next-line no-param-reassign
		menus.main = !menus.main;
		return { menus };
	}

};