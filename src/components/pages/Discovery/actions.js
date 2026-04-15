export default {

	fetchDiscoveryClaim: async () => {

		await delay(2000);

		return {
			arcade: {
				claim: {
					isAiGenerated: true,
					author: {
						name: 'David Hume'
					},
					content: 'The sun will rise tomorrow'
				}
			}
		};

	}

};

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}