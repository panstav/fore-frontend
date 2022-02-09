import { roles } from 'constants.js';

export default function isAuth(userRole, { minimum, only }) {
	return !(
		// there's no user role and there are requirements
		(!userRole && (minimum || only))
		// minimum attribute is for blocking access by user clearance
		|| (minimum && roles.order.indexOf(minimum) > roles.order.indexOf(userRole))
		// only attribute is to give access to specific user roles
		|| (only && !only.includes(userRole))
	);
}