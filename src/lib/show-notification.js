import { Link } from 'wouter-preact';

import { toast } from 'react-toastify';

import { notifications } from 'constants.js';

const presets = {

	[notifications.NEW_CLAIM_SENT]: () => ({
		closeButton: false,
		autoClose: false,
		message: () => <div className="is-align-items-baseline is-flex is-justify-content-space-between">
			<p>Creating your Claim...</p>
		</div>
	}),

	[notifications.NEW_CLAIM_CREATED]: ({ id }) => ({
		type: 'success',
		closeButton: true,
		message: () => <div className="is-align-items-baseline is-flex is-justify-content-space-between">
			<p>Got it!</p>
			<Link className="button is-small" href={`/claim/${id}`}>View Claim</Link>
		</div>
	})

};

export default function showNotification(preset, { _notificationId: notificationId, ...data } = {}) {
	const { type, message, ...notification } = presets[preset](data);

	if (notificationId) return toast.update(notificationId, { type, render: message, ...notification });

	if (type) return toast[type](message, notification);

	return toast(message, notification);
}