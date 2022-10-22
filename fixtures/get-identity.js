import { roles } from 'constants';

export default function getIdentity () {
	return {
		user: {
			id: '123',
			// role: roles.GUEST
			// role: roles.MEMBER
			role: roles.ADMIN
		}
	};
}