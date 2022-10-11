export default {

	setCurrentSpace({ spaces, claims }, nextSpaceId) {

		// const updatedSpaces = spaces.map((space) => {
		// 	if (space.isCurrent) delete space.isCurrent;
		// 	return space;
		// });

		if (nextSpaceId) {
			const updatedSpaces = setCurrentBy((space) => space.id === nextSpaceId);
			return { spaces: updatedSpaces };
		}

		// no space was selected from dropdown
		// set the current space to the first requirements satisfier
		const { pathname } = window.location;

		if (pathname === '/') {
			const updatedSpaces = setCurrentBy((space) => space.id === 'public');
			return { spaces: updatedSpaces };
		}

		// usually, the resource id is the second part of the url
		// and the first part is the type of the resource
		const [, resourceType, resourceId] = pathname.split('/');

		if (resourceType === 'space') {
			const updatedSpaces = setCurrentBy((space) => space.id === resourceId);
			return { spaces: updatedSpaces };
		}

		if (resourceType === 'claim') {
			const claimId = claims.find((claim) => claim.id === resourceId);
			if (claimId && claimId.spaceId) {
				const updatedSpaces = setCurrentBy((space) => space.id === claimId.spaceId);
				return { spaces: updatedSpaces };
			}
		}

		// assume action will be called again when a space indicator is relevant
		// (e.g. when the user navigates to a space page)

		function setCurrentBy(fn) {
			return spaces.map((space) => {
				const isCurrent = fn(space);
				if (isCurrent !== true && isCurrent !== false) throw new Error('setCurrentBy first argument must return a boolean');
				space.isCurrent = isCurrent;
				return space;
			});
		}

	}

};