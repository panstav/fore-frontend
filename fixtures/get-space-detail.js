import _fakeClaims from './_fake-claims.js';

export default () => ({
	id: 'public',
	name: 'Public',
	claims: _fakeClaims
		.sort((a, b) => b.createdAt - a.createdAt)
});