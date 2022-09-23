export default function searchOwnClaims ({ keywords, spaceId }) {
	return [
		{
			authorId: '10',
			content: 'This is a claim 1',
			id: '1',
			spaceId
		},
		{
			authorId: '20',
			content: 'This is a claim 2',
			id: '2',
			spaceId
		},
		{
			authorId: '30',
			content: 'This is a claim 3',
			id: '3',
			spaceId
		}
	];
}