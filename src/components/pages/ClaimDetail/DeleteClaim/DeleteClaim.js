import Access from "wrappers/Access";
import WrapConditionally from "wrappers/WrapConditionally";
import Modal from "wrappers/Modal";

export default function DeleteClaim({ userIsAuthor, deleteClaim, confirmDeletionModalProps }) {
	return <>

		<WrapConditionally if={!userIsAuthor} wrapper={({ children }) => {
			return <Access only={(r) => r.ADMIN}>
				{children}
			</Access>;
		}}>
			<button onClick={deleteClaim} className="button is-small is-danger is-outlined">Delete</button>
		</WrapConditionally>

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