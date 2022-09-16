import getIdentity from 'fixtures/get-identity.js';
import getLatestClaims from 'fixtures/get-new-claims.js';
import getTopClaims from 'fixtures/get-new-claims.js';
import getClaimDetail from 'fixtures/get-claim-detail.js';
import addClaim from 'fixtures/add-claim.js';
import connectClaims from 'fixtures/connect-claim';
import powerClaim from 'fixtures/power';
import releasePower from 'fixtures/release-power';
import searchOwnClaims from 'fixtures/search-own-claims';

const fixtures = {
	identify: getIdentity,
	getLatestClaims,
	getTopClaims,
	getClaimDetail,
	addClaim,
	connectClaims,
	searchOwnClaims,
	powerClaim,
	releasePower
};

// export js objects as functions that return them
export default Object.keys(fixtures).reduce((accu, fixtureName) => {
	accu[fixtureName] = hideBehindTimeout(fixtures[fixtureName]);
	return accu;
}, {});

function hideBehindTimeout(fixture) {
	return (data) => new Promise((resolve) => {
		setTimeout(() => resolve(fixture(data)), 1500);
	});
}