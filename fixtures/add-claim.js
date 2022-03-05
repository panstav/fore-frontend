import getClaimDetail from './get-claim-detail';

export default function addClaim({ parentId, direction, ...claim }) {

	const newClaim = {
		...claim,
		id: new Date().getTime().toString().slice(-6),

		createdAt: new Date().getTime(),
		author: {
			name: "You!",
			profileImageUrl: "https://thispersondoesnotexist.com/image"
		},
		usedAt: {
			support: [],
			opposition: []
		},
		usedHere: {
			support: [],
			opposition: []
		}

	};

	if (parentId) newClaim.usedAt[direction] = [{ id: parentId, content: getClaimDetail({ id: parentId }).content }];

	return newClaim;
}