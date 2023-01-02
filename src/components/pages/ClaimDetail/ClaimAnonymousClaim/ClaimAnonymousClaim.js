import Modal from "wrappers/Modal";

export default function ClaimAnonymousClaim({ claimAnonymousClaim, confirmClaimingAnonymousClaimModalProps }) {
	return <>

		<button onClick={claimAnonymousClaim} className="button is-small is-primary is-outlined">Claim</button>

		<Modal {...confirmClaimingAnonymousClaimModalProps} render={function ConfirmClaimingAnonymousClaimModal() {
			return <>
				<p>Your name will be displayed beside this Claim and you will be able to reuse wherever. This action can always be undone.</p>
				<div className="is-flex is-justify-content-end">
					<button className="button is-danger">Claim</button>
				</div>
			</>;
		}} />

	</>;
}