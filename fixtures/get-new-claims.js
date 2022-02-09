import _fakeClaims from './_fake-claims.js';

export default () => _fakeClaims
	.sort((a, b) => b.createdAt - a.createdAt)
	.slice(0, 10);