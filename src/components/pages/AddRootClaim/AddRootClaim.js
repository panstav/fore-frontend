import Section from 'wrappers/Section';

import SignupForBetaUpdates from 'base/SignupForBetaUpdates';

export default function AddRootClaim({ isShowingExpaliner, isConfirmed, addAnotherClaim }) {
	return <Section withTopMargin={true} className="has-text-centered content">

		<div className="box is-small m-auto has-text-left">

			{isShowingExpaliner && <>
				<p>On this page you can create early Claims while Fore is in closed beta.</p>

				<p>
					<button className="button mb-5 is-primary" onClick={addAnotherClaim}>
						Create a Claim
					</button>
				</p>

				<p><b>Fore</b> is where collaborative truth-seeking happens.</p>

				<p>Claims are the atoms of the platform, much like Posts are the atoms of most social networks.</p>

				<p>A single Claim is a statement, a held belief, a bid for a truth that other Claims can either support or opposse.</p>

				<p>No Claim is universal. Every Claim will be judged and rated by the community for its truthfulness within context.</p>

				<p>This will make more sense in the future, in the meantime - create a Claim that you believe to be true although others might not, yet.</p>
			</> }

			{isConfirmed && <>
				<h2 className="is-size-1">Got it</h2>
				<p className="is-size-4">Thanks!</p>
				<button className="button is-primary" onClick={addAnotherClaim}>
					Add another
				</button>
			</>}

			<hr />

			<p>We&apos;re committed to creating a social platform where you can discover nuanced perspectives, challenge consensus, and earn for debating constructively.</p>

			<p>Join us!</p>

			<SignupForBetaUpdates />

		</div>

	</Section>;
}