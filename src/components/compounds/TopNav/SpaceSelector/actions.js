export default {

	setCurrentSpace({ spaces }, nextSpaceId) {

		const updatedSpaces = spaces.map((space) => {
			if (space.isCurrent) delete space.isCurrent;
			return space;
		});

		if (nextSpaceId) {
			const indexOfPublicSpace = updatedSpaces.findIndex(space => space.id === nextSpaceId);
			updatedSpaces[indexOfPublicSpace].isCurrent = true;
			return { spaces: updatedSpaces };
		}

		const { pathname } = window.location;

		if (pathname === '/') {
			const indexOfPublicSpace = updatedSpaces.findIndex(space => space.id === 'public');
			updatedSpaces[indexOfPublicSpace].isCurrent = true;
			return { spaces: updatedSpaces };
		};

		const [, slug, spaceId] = pathname.split('/');
		if (slug !== 'space' || !nextSpaceId) return {};

		const indexOfSpace = updatedSpaces.findIndex(space => space.id === nextSpaceId);
		if (!~indexOfSpace) return {};

		// set the one that matches the URL as the current space
		updatedSpaces[indexOfSpace].isCurrent = true;
		return { spaces: updatedSpaces };
	}

}