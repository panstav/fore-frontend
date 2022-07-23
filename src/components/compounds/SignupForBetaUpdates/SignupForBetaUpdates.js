import Checkbox from 'components/elements/Checkbox';

export default function SignupForBetaUpdates({ control, onSubmit, didSendWithoutMarking, successfullySignedUpForUpdates }) {

	return <form onSubmit={onSubmit} className="mt-6">
		<h2>Signup for updates:</h2>

		{successfullySignedUpForUpdates
			? <p className="notification is-success is-small">Awesome. You&apos;re In!</p>
			: <Form />}

	</form>;

	function Form() {
		return <>
			<label className="checkbox mb-3">
				<Checkbox className="checkbox mr-1" name="notifyWhenOpenBeta" defaultValue={false} control={control} />
				Email me when Fore enters open beta.
			</label>
			<label className="checkbox mb-3">
					<Checkbox className="checkbox mr-1" name="notifyOtherContributionOptions" defaultValue={false} control={control} />
				Email me about other ways I can contribute.
			</label>
			{didSendWithoutMarking && <p className="notification is-warning is-small">Mark at least one of these to sign-up for updates.</p>}
			<button className="button is-success">Let me know</button>
		</>;
	}

}