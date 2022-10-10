import faker from '@faker-js/faker';

faker.extensions = {
	arrayOf,
	randomId
};

let claims = faker.extensions.arrayOf(50, () => ({
	id: faker.extensions.randomId(),
	spaceId: 'public',
	content: faker.hacker.phrase(),

	createdAt: faker.date.past().getTime()
}));

claims = claims.map((claim) => ({
	...claim,
	author: {
		name: faker.helpers.userCard().name,
		profileImageUrl: `https://avatars.dicebear.com/v2/avataaars/${claim.id}.jpg`
	},
	usedAt: getRandomClaimRefs({ max: 5 }),
	usedHere: getRandomClaimRefs({
		max: 5,
		map: (ref) => ({ ...ref, power: Math.floor(Math.random() * 10) * (Math.floor(Math.random() * 5) % 5 ? 1 : 5) })
	})
}));

// eslint-disable-next-line no-debugger
debugger;

function getRandomClaimRefs({ max = 10, map = (x) => x }) {
	return faker.extensions.arrayOf({ min: 0, max }, () => claims[Math.floor(Math.random() * (claims.length))].id)
		.reduce((accu, id) => {
			// populate random ids with their content
			if (!accu.map((claim) => claim.id).includes(id)) accu.push({ id, content: claims.find((fake) => fake.id === id).content });
			return accu;
		}, [])
		.reduce((accu, ref) => {
			accu[Object.keys(accu)[Math.floor(Math.random() * 2)]].push(map(ref));
			return accu;
		}, { support: [], opposition: [] });
}

function arrayOf(times, fillerFn) {
	times = (typeof times === 'number') ? { min: times, max: times } : times;
	return Array(faker.datatype.number(times)).fill(null).map(fillerFn);
}

function randomId() {
	return Math.random().toString(36).substring(2, 18);
}