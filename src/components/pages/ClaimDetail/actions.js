import api from 'services/xhr';

export default {

	async getClaimDetail({ claims }, id) {
		const claim = await api.getClaimDetail({ id });
		claim.isDetailed = true;

		const index = claims.findIndex((claim) => claim.id === id);
		if (index >= 0) {
			claims[index] = claim;
		} else {
			claims.push(claim);
		}

		return { claims };
	},

	trackClaimView({ recent }, { id, content }) {
		fifo(recent.viewedClaims, { id, content }, {
			max: 5,
			compare: (claim) => claim.id === id
		});
		return { recent };
	}

};

function fifo(array, item, { max, compare = () => false }) {
	const index = compare ? array.findIndex(compare) : array.indexOf(item);
	if (index >= 0) array.splice(index, 1);
	array.unshift(item);
	if (max && array.length > max) array.pop();
}