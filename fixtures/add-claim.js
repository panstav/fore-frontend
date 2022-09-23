import getClaimDetail from './get-claim-detail';

export default function addClaim({ parentId, direction, spaceId, ...claim }) {

	const claimId = new Date().getTime().toString().slice(-6);

	const newClaim = {
		...claim,
		spaceId,
		id: claimId,

		createdAt: new Date().getTime(),
		author: {
			name: "You!",
			profileImageUrl: `https://avatars.dicebear.com/v2/avataaars/${claimId}.jpg`
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