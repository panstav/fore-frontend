import { roles } from 'constants';

export default function getIdentity () {
	return {
		user: {
			id: '123',
			name: 'Stav Geffen',
			// role: roles.GUEST
			// role: roles.MEMBER
			role: roles.ADMIN
		}
	};
}