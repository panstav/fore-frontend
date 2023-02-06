import { connect } from 'unistore/preact';

import attachHref from 'lib/attach-href-to-space';

import actions from './actions';

import { spacesSorter } from '../index';
import Component from './SpacesMenu';

export default connect(mapStateToProps, actions)(SpacesMenu);

function SpacesMenu({ spaces, createSpace, closeMenus }) {

	const props = {
		spaces: spaces.map(attachHref).sort(spacesSorter),
		createSpace: () => { closeMenus(); createSpace(); }
	};

	return Component(props);
}

function mapStateToProps({ spaces }) {
	return {
		spaces
	};
}