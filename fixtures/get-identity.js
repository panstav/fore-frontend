import { roles } from 'constants';

export default function getIdentity () {
	return {
		id: '123',
		// role: roles.GUEST
		role: roles.ADMIN
	};
}