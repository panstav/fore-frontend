import Section from 'wrappers/Section';

import { Neighborhood } from 'components/elements/Icon';

import SignupForBetaUpdates from 'compounds/SignupForBetaUpdates';

export default function ClosedBeta() {
	return <Section withTopMargin={true}>

		<div className="box is-small m-auto mt-6">
			<div className="content">

				<p className="has-text-centered"><b>Fore</b> is still in closed beta.</p>

				<Neighborhood className="mt-5" />

				<SignupForBetaUpdates />

			</div>
		</div>

	</Section>;
}