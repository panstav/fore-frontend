import { connect } from 'unistore/preact';
import { Redirect } from 'wouter-preact';

import localstorage from 'services/localstorage';

import isAuth from 'lib/is-auth';

import Feed from './Feed';
import PromotionalHomepage from './PromotionalHomepage';

import { roles } from 'constants.js';

export default connect(mapStateToProps)(Home);

function Home({ isLoggedIn, isBetaUser }) {

	if (isLoggedIn) {
		// successfully logging in directs users to homepage
		// so we'll check whether there's a redirectTo saved
		const redirectTo = localstorage.get().redirectTo;
		if (redirectTo) {
			// delete it so this won't happen again before user lands on another unauthorized path
			// and redirect to it
			localstorage.set({ redirectTo: null });
			return <Redirect to={redirectTo} replace={true} />;
		}
	}

	const Page = isBetaUser
		// show feed to beta users
		? Feed
		// otherwise show the promotional page
		: PromotionalHomepage;

	return <Page />;
}

function mapStateToProps({ user }) {
	return {
		isLoggedIn: isAuth(user.role, { minimum: roles.order[1] }),
		isBetaUser: isAuth(user.role, { minimum: roles.MEMBER_BETA })
	};
}