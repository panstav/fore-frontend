import { useContext } from "preact/compat";
import { connect } from "unistore/preact";
import { useLocation } from "wouter-preact";

import { ClaimDetailContext } from "contexts";

import useModal from "hooks/use-modal";

import actions from "./actions";

import Component from "./DeleteClaim";

export default connect(null, actions)(DeleteClaim);

function DeleteClaim({ userIsOwner, deleteClaim, spaceId }) {

	const { id: claimId } = useContext(ClaimDetailContext);

	const [, setLocation] = useLocation();

	const [confirmDeletionModalProps, showConfirmDeletionModal] = useModal({
		title: "Sure you want to delete this Claim?",
		onSubmit: async () => {
			await deleteClaim(claimId);
			setLocation(`/space/${spaceId}`);
		}
	});

	const props = {
		userIsOwner,
		deleteClaim: showConfirmDeletionModal,
		confirmDeletionModalProps
	};

	return Component(props);

}