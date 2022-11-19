import { connect } from 'unistore/preact';

import isAuth from 'lib/is-auth';

import { roles } from 'constants.js';

export default connect(mapStateToProps)(Access);

function Access({ userRole, minimum, only, onFail = returnNull, children }) {

	const requirements = {
		minimum: funcOrInline(minimum),
		only: funcOrInline(only)
	};

	if (!isAuth(userRole, requirements)) return onFail({ userRole });

	return children;
}

function mapStateToProps({ user }) {
	return { userRole: user.role };
}

function funcOrInline(property) {
	return (typeof (property) === 'function') ? property(roles) : property;
}

function returnNull() {
	// default behaviour is to avoid rendering children when conditions aren't met
	return null;
}