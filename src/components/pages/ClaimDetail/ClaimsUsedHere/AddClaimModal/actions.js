export default {

	aiClaimSO({ ai }, payload) {
		ai.claim = 'test';
		return { ai };
	}

}