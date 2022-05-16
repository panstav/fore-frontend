import { connect } from 'unistore/preact';

import actions from './actions.js';

import Component from './Footer';

export default connect(null, actions)(Footer);

function Footer({ logOut }) {

	const props = {
		logOut
	};

	return Component(props);

}