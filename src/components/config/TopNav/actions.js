import { createSpace } from 'actions';

export default (store) => ({

	createSpace,

	toggleMainMenu: ({ menus }) => {
		menus.main = !menus.main;
		return { menus };
	}

});