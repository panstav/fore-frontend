import cloneDeep from 'lodash.clonedeep';

import _fakeClaims from './_fake-claims.js';
import _fakeSpaces from './_fake-spaces.js';

export default (spaceId) => {
	const space = _fakeSpaces.find(space => space.id === spaceId);
	space.claims = cloneDeep(_fakeClaims).filter(claim => claim.spaceId === spaceId);
	space.participants = space.claims.map(({ owner }) => owner.id);
	return space;
};