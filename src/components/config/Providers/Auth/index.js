import { connect } from 'unistore/preact';
import { Redirect } from 'wouter-preact';

import actions from './actions';

export default connect(mapStateToProps, actions)(AuthProvider);

function AuthProvider({ isSignedIn, identify, children }) {

	if (isSignedIn) return allow();

	identify();

	return null;

	function allow() {

		const redirectTo = getRedirectTo();
		if (redirectTo) return <Redirect to={redirectTo} />;

		return children;
	}

}

function mapStateToProps({ user }) {
	return {
		isSignedIn: !!user.role
	};
}

function getRedirectTo() {
	const urlSearchParams = new URLSearchParams(location.search);
	return urlSearchParams.get('redirect-to');
}