import getIdentity from 'fixtures/get-identity.js';
import getClaimDetail from 'fixtures/get-claim-detail.js';
import getSpaceDetail from 'fixtures/get-space-detail.js';
import addClaim from 'fixtures/add-claim.js';
import connectClaims from 'fixtures/connect-claim';
import powerClaim from 'fixtures/power';
import releasePower from 'fixtures/release-power';
import searchOwnClaims from 'fixtures/search-own-claims';

const fixtures = {
	identify: getIdentity,
	getClaimDetail,
	getSpaceDetail,
	addClaim,
	connectClaims,
	searchClaimsOfUser: searchOwnClaims,
	powerClaim,
	releasePower,
	setSpaceSettings: () => ({})
};

// export js objects as functions that return them
export default Object.keys(fixtures).reduce((accu, fixtureName) => {
	// eslint-disable-next-line no-param-reassign
	accu[fixtureName] = hideBehindTimeout(fixtures[fixtureName]);
	return accu;
}, {});

function hideBehindTimeout(fixture) {
	return (data) => new Promise((resolve) => {
		setTimeout(() => resolve(fixture(data)), 1500);
	});
}