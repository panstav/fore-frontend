import Modal from "wrappers/Modal";

export default function AnonymizeClaim({ anonymizeClaim, confirmAnonymizationModalProps }) {
	return <>

		<button onClick={anonymizeClaim} className="button is-small is-danger is-outlined">Anonymize</button>

		<Modal {...confirmAnonymizationModalProps} render={() => {
			return <>
				<p>You will not be able to use it anywhere.The action can only be undone before someone else &quot;picks it up&quot; and claims it as their own.</p>
				<div className="is-flex is-justify-content-end">
					<button className="button is-danger">Anonymize</button>
				</div>
			</>;
		}} />

	</>;
}