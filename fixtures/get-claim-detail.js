import _fakeClaims from './_fake-claims.js';

export default function getClaimDetail({ id }) {
	return _fakeClaims.find((claim) => claim.id === id);
}