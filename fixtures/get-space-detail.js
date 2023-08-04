import _fakeClaims from './_fake-claims.js';
import _fakeSpaces from './_fake-spaces.js';

export default (spaceId) => {
	const space = _fakeSpaces.find(space => space.id === spaceId);
	space.claims = [..._fakeClaims];
	return space;
};