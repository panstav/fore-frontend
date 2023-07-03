import Modal from "wrappers/Modal";

export default function DeleteClaim({ deleteClaim, confirmDeletionModalProps }) {
	return <>

		<button onClick={deleteClaim} className="button is-small is-danger is-outlined">Delete</button>

		<Modal {...confirmDeletionModalProps} render={function ConfirmDeleteModal() {
			return <>
				<p>This action cannot be undone.</p>
				<div className="is-flex is-justify-content-end">
					<button className="button is-danger">Delete</button>
				</div>
			</>;
		}} />

	</>;
}