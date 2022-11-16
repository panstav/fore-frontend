import Section from 'wrappers/Section';

import SignupForBetaUpdates from 'compounds/SignupForBetaUpdates';

import { Upgrade } from 'elements/Icon';

export default function Support({ isConfirmed, addAnotherClaim }) {
	return <Section className="has-text-centered content">

		<div className="box is-small m-auto has-text-left">

			{isConfirmed && <>
				<h2 className="is-size-1 mb-2">Got it</h2>
				<p className="is-size-4">Thanks!</p>
				<hr/>
			</>}

			<p>Create early Claims while Fore is in Closed Beta.</p>

			<p>
				<button className="button mb-5 is-primary" onClick={addAnotherClaim}>
					Create a Claim
				</button>
			</p>

			<p><b>Fore</b> is where collaborative truth-seeking happens.</p>

			<p>Claims are the atoms of the platform, much like Posts are the atoms of most social networks.</p>

			<p>A single Claim is a statement, a held belief, a bid for a truth that other Claims can either support or oppose.</p>

			<p>Claims are universal. A Claim created in support or opposition to another can be reused to either support or oppose any other Claim on Fore. In contrast to replies on other social networks that are strictly dependent on their context.</p>

			<p>All of this will make more sense once Fore enters Open Beta, in the meantime - create a Claim that you believe to be true although others might not, yet.</p>

			<Upgrade className="my-6" />

			<p>We&apos;re committed to creating a social platform where you can discover nuanced perspectives, challenge consensus, and earn for contributing meaningful Claims and debating constructively.</p>

			<SignupForBetaUpdates className="mt-6" />

		</div>

	</Section>;
}