import classnames from 'classnames';

import Checkbox from 'elements/Checkbox';

export default function SignupForUpdates({ control, onSubmit, didSendWithoutMarking, successfullySignedUpForUpdates, className, isMinorUpdatesDisabled }) {

	const containerClasses = classnames('content', className);

	return <form onSubmit={onSubmit} className={containerClasses}>
		<h2 className="subtitle">Signup for updates:</h2>

		{successfullySignedUpForUpdates
			? <p className="notification is-success is-small">Awesome. You&apos;re In!</p>
			: <Form />}

	</form>;

	function Form() {
		return <>
			<div>
				<label className="checkbox mb-3">
					<Checkbox className="checkbox mr-1" name="notifyWhenMajorUpdates" defaultValue={false} control={control} />
					Email me when Fore gets <strong>major</strong> updates.
				</label>
			</div>
			<div>
				<label className="checkbox mb-3">
					<Checkbox className="checkbox mr-1" name="notifyWhenMinorUpdates" defaultValue={false} control={control} disabled={isMinorUpdatesDisabled} />
					Email me when Fore gets <strong>minor</strong> updates too.
				</label>
			</div>
			<div className="is-flex is-align-items-center">
				<button className="button is-success mr-3">Let me know</button>
				{didSendWithoutMarking && <p className="notification is-warning is-small">Mark at least one of these to signup for updates.</p>}
			</div>
		</>;
	}

}