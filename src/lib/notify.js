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

	[notifications.NEW_CLAIM_CREATED]: ({ claimId }) => ({
		type: 'success',
		closeButton: true,
		autoClose: true,
		message: () => <div className="is-align-items-baseline is-flex is-justify-content-space-between">
			<p>Got it!</p>
			<Link className="button is-small" href={`/claim/${claimId}`}>View Claim</Link>
		</div>
	}),

	[notifications.NEW_CLAIM_CONNECTED]: () => ({
		closeButton: false,
		autoClose: true,
		message: () => <div className="is-align-items-baseline is-flex is-justify-content-space-between">
			<p>Connected!</p>
		</div>
	}),

};

export default function notify(preset, { _id: notificationId, ...data } = {}) {
	const { type, message, ...notification } = presets[preset](data);
	if (notification.autoClose) notification.autoClose = notifications.autoCloseMs;

	if (notificationId) return toast.update(notificationId, { type, render: message, ...notification });

	if (type) return toast[type](message, notification);

	return toast(message, notification);
}