import classnames from 'classnames';

import Checkbox from 'elements/Checkbox';

export default function SignupForUpdates({ control, onSubmit, didSendWithoutMarking, successfullySignedUpForUpdates, className, isMinorUpdatesDisabled }) {

	const containerClasses = classnames('content', className);

	return <form onSubmit={onSubmit} className={containerClasses}>
		<h2 className="is-size-6 mb-3">Email me when:</h2>

		{successfullySignedUpForUpdates
			? <p className="notification is-success is-small">Awesome. You&apos;re In!</p>
			: <Form />}

	</form>;

	function Form() {
		const minorUpdatesLabelStyle = { cursor: isMinorUpdatesDisabled ? 'not-allowed' : 'auto' };
		return <div className='is-size-7'>
			<div>
				<label className="checkbox mb-3">
					<Checkbox className="checkbox mr-1" name="notifyWhenMajorUpdates" defaultValue={false} control={control} />
					Fore <strong>Major</strong> updates
				</label>
			</div>
			<div>
				<label className="checkbox mb-3" style={minorUpdatesLabelStyle}>
					<Checkbox className="checkbox mr-1" name="notifyWhenMinorUpdates" defaultValue={false} control={control} disabled={isMinorUpdatesDisabled} />
					Fore <strong>Minor</strong> updates too
				</label>
			</div>
			<div className="is-flex is-align-items-center">
				<button className="button is-small is-success mr-3">Let me know</button>
				{didSendWithoutMarking && <p className="notification is-warning is-small">Mark at least one of these to signup for updates.</p>}
			</div>
		</div>;
	}

}