import { connect } from 'unistore/preact';
import { Redirect } from 'wouter-preact';

import localstorage from 'services/localstorage';

import isAuth from 'lib/is-auth';

import Section from 'wrappers/Section';

import Space from 'components/pages/SpaceDetail';
import SignupForUpdates from 'compounds/SignupForUpdates';

import PromotionalHomepage from './PromotionalHomepage';

import { roles, localStorageKeys } from 'constants.js';

export default connect(mapStateToProps)(Home);

function Home({ isLoggedIn, isMemberUser }) {

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

	// show feed to members
	if (isMemberUser) return <>
		<Space params={{ spaceId: 'public' }} />
		<Section>
			<div className="box">
				<SignupForUpdates />
			</div>
		</Section>
	</>;

	// otherwise show the promotional page
	return <PromotionalHomepage />;
}

function mapStateToProps({ user }) {
	return {
		isLoggedIn: !!user.id,
		isMemberUser: isAuth(user.role, { minimum: roles.MEMBER })
	};
}