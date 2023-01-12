import timeAgo from 'lib/time-ago.js';

import * as types from './types';

import Component from './Notifications';

export default function Notifications({ notifications, ...props }) {

	props.notifications = notifications
		// remove notifications that don't have a registered type
		.filter(({ type }) => !!types[type])
		// sort by timestamp, newest first
		.sort((a, b) => b.payload.createdAt - a.payload.createdAt)
		// map to the registered type
		// add a formatted timestamp e.g. "2m" or "1d" or "2w"
		.map(({ type, payload: { createdAt: timestamp, ...payload } }) => {
			const createdAt = timeAgo.format(new Date(timestamp), 'mini-now');
			return { type, payload: { createdAt, ...payload } };
		});

	return <Component {...props} />;

}