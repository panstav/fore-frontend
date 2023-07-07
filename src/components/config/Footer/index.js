import { connect } from 'unistore/preact';
import { useLocation } from 'wouter-preact';

import actions from './actions.js';

import Component from './Footer';

const version = process.env.npm_package_version;

export default connect(null, actions)(Footer);

function Footer({ logOut }) {

	const [, setLocation] = useLocation();

	const handleLogOut = async () => {
		logOut();
		setLocation('/');
	};

	const props = {
		logOut: handleLogOut,
		version
	};

	return Component(props);

}