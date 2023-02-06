import api from 'services/xhr';
import trackEvents from 'services/track-events';

export default (store) => ({

	toggleMainMenu: ({ menus }) => {
		menus.main = !menus.main;
		return { menus };
	},

	async createSpace({ spaces }, { space, goToSpace }) {
		space.type = space.type || 'shared';

		const fullSpace = await api.addSpace(space);

		trackEvents('create_space', { spaceId: fullSpace.id });

		const updatedSpaces = spaces.concat(fullSpace)
			.map((space) => Object.assign({}, space, { isCurrent: space.id === fullSpace.id }));

		store.setState({ spaces: updatedSpaces });
		goToSpace(fullSpace.id);
	}

})