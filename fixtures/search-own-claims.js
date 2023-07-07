export default function searchOwnClaims ({ keywords, spaceId }) {
	return [
		{
			ownerId: '10',
			content: 'This is a claim 1',
			id: '1',
			spaceId
		},
		{
			ownerId: '20',
			content: 'This is a claim 2',
			id: '2',
			spaceId
		},
		{
			ownerId: '30',
			content: 'This is a claim 3',
			id: '3',
			spaceId
		}
	];
}