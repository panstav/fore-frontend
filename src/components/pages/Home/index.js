import { connect } from 'unistore/preact';
import { Redirect } from 'wouter-preact';

import localstorage from 'services/localstorage';

import isAuth from 'lib/is-auth';

import Space from 'components/pages/SpaceDetail';

import PromotionalHomepage from './PromotionalHomepage';

import { roles, localStorageKeys } from 'constants.js';

export default connect(mapStateToProps)(Home);

function Home({ isLoggedIn, isBetaUser }) {

	if (isLoggedIn) {
		// successfully logging in directs users to homepage
		// so we'll check whether there's a redirectTo saved
		const redirectTo = localstorage.get(localStorageKeys.redirectTo);
		if (redirectTo) {
			// delete it so this won't happen again before user lands on another unauthorized path
			// and redirect to it
			localstorage.unset('redirectTo');
			return <Redirect to={redirectTo} replace={true} />;
		}
	}

	// show feed to beta users
	if (isBetaUser) return <Space params={{ spaceId: 'public' }} />;

	// otherwise show the promotional page
	return <PromotionalHomepage />;
}

function mapStateToProps({ user }) {
	return {
		isLoggedIn: !!user.id,
		isBetaUser: isAuth(user.role, { minimum: roles.MEMBER_BETA })
	};
}