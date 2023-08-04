import { roles } from 'constants';

import _fakeSpaces from './_fake-spaces';

export default function getIdentity () {
	return {
		user: {
			id: '123',
			name: 'Stav Geffen',
			// role: roles.GUEST
			// role: roles.MEMBER
			role: roles.ADMIN
		},
		spaces: [..._fakeSpaces]
	};
}