import { connect } from 'unistore/preact';

import actions from './actions';

export default connect(mapStateToProps, actions)(AuthProvider);

function AuthProvider({ hasRole, identify, children }) {

	if (hasRole) return children;

	identify();

	return null;
}

function mapStateToProps({ user }) {
	return {
		hasRole: !!user.role
	};
}