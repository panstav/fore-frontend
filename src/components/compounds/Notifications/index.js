import * as types from './types';

import Component from './Notifications';

export default function Notifications({ notifications, ...props }) {

	props.notifications = notifications
		// remove notifications that don't have a registered type
		.filter(({ type }) => !!types[type])
		// sort by timestamp, newest first
		.sort((a, b) => b.payload.createdAt - a.payload.createdAt);

	return <Component {...props} />;

}