import { connect } from 'unistore/preact';

import attachHref from 'lib/attach-href-to-space';

import Component from './SpacesMenu';

export default connect(mapStateToProps)(SpacesMenu);

function SpacesMenu({ spaces }) {

	// avoid rendering dropdown when there is only one Space
	if (spaces.length < 2) return null;

	const props = {
		spaces: spaces.map(attachHref)
	};

	return Component(props);
}

function mapStateToProps({ spaces }) {
	return {
		spaces
	};
}