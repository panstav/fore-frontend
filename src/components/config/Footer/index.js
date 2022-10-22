import { connect } from 'unistore/preact';

import actions from './actions.js';

import Component from './Footer';

const version = process.env.npm_package_version;

export default connect(null, actions)(Footer);

function Footer({ logOut }) {

	const props = {
		logOut,
		version
	};

	return Component(props);

}