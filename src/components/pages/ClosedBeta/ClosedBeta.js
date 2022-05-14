import Section from 'wrappers/Section';

import SignupForBetaUpdates from 'base/SignupForBetaUpdates';

export default function ClosedBeta() {
	return <Section withTopMargin={true}>

		<div className="box is-small m-auto mt-6">
			<div className="content">

				<p className="has-text-centered"><b>Fore</b> is still in closed beta.</p>

				<SignupForBetaUpdates />

			</div>
		</div>

	</Section>;
}