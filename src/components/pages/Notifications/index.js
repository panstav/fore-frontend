import { connect } from 'unistore/preact';

import Component from './Notifications';

export default connect(mapStateToProps)(Notifications);

function Notifications({ notifications }) {

	const props = {
		notifications
	};

	return Component(props);

}

function mapStateToProps({ notifications }) {
	return {
		notifications
	};
}