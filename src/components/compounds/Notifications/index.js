import timeAgo from 'lib/time-ago.js';

import * as types from './types';

import Component from './Notifications';

export default function Notifications({ notifications, ...props }) {

	props.notifications = notifications
		.filter(({ type }) => !!types[type])
		.map(({ type, payload: { createdAt: timestamp, ...payload } }) => {
			const createdAt = timeAgo.format(new Date(timestamp), 'mini-now');
			return { type, payload: { createdAt, ...payload } };
		});

	return <Component {...props} />;

}