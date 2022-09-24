export default {

	setCurrentSpace: ({ spaces }, spaceId) => {
		spaces.currentId = spaceId;
		return { spaces };
	}

}