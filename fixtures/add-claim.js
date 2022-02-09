export default function addClaim(claim) {
	return {
		...claim,
		id: new Date().getTime().toString().substring(0, 6),

		createdAt: new Date().getTime(),
		author: {
			name: "You!",
			profileImageUrl: "https://thispersondoesnotexist.com/image"
		},
		usedIn: {
			support: [],
			opposition: []
		},
		usedHere: {
			support: [],
			opposition: []
		}

	};
}