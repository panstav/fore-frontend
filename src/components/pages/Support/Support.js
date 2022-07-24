import Section from 'wrappers/Section';

import SignupForBetaUpdates from 'compounds/SignupForBetaUpdates';

import { Upgrade } from 'elements/Icon';

export default function Support({ isConfirmed, addAnotherClaim }) {
	return <Section withTopMargin={true} className="has-text-centered content">

		<div className="box is-small m-auto has-text-left">

			{isConfirmed && <>
				<h2 className="is-size-1">Got it</h2>
				<p className="is-size-4">Thanks!</p>
				<hr/>
			</>}

			<p>On this page you can create early Claims while Fore is still in closed beta.</p>

			<p>
				<button className="button mb-5 is-primary" onClick={addAnotherClaim}>
					Create a Claim
				</button>
			</p>

			<p><b>Fore</b> is where collaborative truth-seeking happens.</p>

			<p>Claims are the atoms of the platform, much like Posts are the atoms of most social networks.</p>

			<p>A single Claim is a statement, a held belief, a bid for a truth that other Claims can either support or oppose.</p>

			<p>No Claim is universal. Every Claim will be assessed and rated for its truthfulness within the context of other Claims.</p>

			<p>All of this will make more sense in the future, in the meantime - create a Claim that you believe to be true although others might not, yet.</p>

			<Upgrade className="my-6" />

			<p>We&apos;re committed to creating a social platform where you can discover nuanced perspectives, challenge consensus, and earn for debating constructively.</p>

			<SignupForBetaUpdates className="mt-6" />

		</div>

	</Section>;
}