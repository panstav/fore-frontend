import _fakeClaims from './_fake-claims.js';

export default ({ spaceId }) => _fakeClaims
	.filter((claim) => claim.spaceId === spaceId)
	.sort((a, b) => b.createdAt - a.createdAt)
	.slice(0, 10);