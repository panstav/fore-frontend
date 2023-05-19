import { connect } from 'unistore/preact';
import { Redirect } from 'wouter-preact';

import localstorage from 'services/localstorage';

import Space from 'pages/SpaceDetail';

import PromotionalHomepage from './PromotionalHomepage';
import EmptyState from './EmptyState';

import { localStorageKeys } from 'constants.js';

export default connect(mapStateToProps)(Home);

function Home({ isLoggedIn, isMemberOfPublic, availableSpaces, firstName }) {

	if (!isLoggedIn) return <PromotionalHomepage />;

	// successfully logging in directs users to homepage
	// so we'll check whether there's a redirectTo saved
	const redirectTo = localstorage.get(localStorageKeys.redirectTo);
	if (redirectTo) {
		// delete it so this won't happen again before user lands on another unauthorized path
		// and redirect to it
		localstorage.unset('redirectTo');
		return <Redirect to={redirectTo} replace={true} />;
	}

	// show feed to members
	if (isMemberOfPublic) return <Space params={{ spaceId: 'public' }} />;

	// redirect to the first available space if there's any
	if (availableSpaces.length) return <Redirect to={`/space/${availableSpaces[0].id}`} />;

	// otherwise show some info about how to get started
	return <EmptyState firstName={firstName} />;
}

function mapStateToProps({ user, spaces }) {
	return {
		firstName: user.name?.split(' ')[0],
		isLoggedIn: !!user.id,
		isMemberOfPublic: !!spaces.find((space) => space.id === 'public'),
		availableSpaces: spaces
	};
}