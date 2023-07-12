import { connect } from 'unistore/preact';

import actions from './actions';

import * as types from './types';
import Component from './Notifications';

export default connect(mapStoreToProps, actions)(Notifications);

function Notifications({ allNotifications, maxNotifications = Infinity, loadMoreNotifications, withViewAllButton }) {

	const notifications = allNotifications
		// remove notifications that don't have a registered type
		.filter(({ type }) => !!types[type])
		// sort by timestamp, newest first
		.sort((a, b) => b.payload.createdAt - a.payload.createdAt)
		.slice(0, maxNotifications);

	const hasLoadedAll = notifications.length && notifications.some(({ isLastBatch }) => isLastBatch);

	const props = {
		notifications,
		hasLoadedAll,
		loadMoreNotifications,
		withViewAllButton
	};

	return <Component {...props} />;

}

function mapStoreToProps({ notifications }) {
	return {
		allNotifications: notifications
	};
}