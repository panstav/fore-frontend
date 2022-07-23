import { connect } from 'unistore/preact';

import isAuth from 'lib/is-auth';

import Feed from './Feed';
import PromotionalHomepage from './PromotionalHomepage';

import { roles } from 'constants.js';

export default connect(mapStateToProps)(Home);

function Home({ isBetaUser }) {
	const Page = isBetaUser
		// show feed to beta users
		? Feed
		// otherwise show the promotional page
		: PromotionalHomepage;

	return <Page />;
}

function mapStateToProps({ user }) {
	return {
		isBetaUser: isAuth(user.role, { minimum: roles.MEMBER_BETA })
	};
}