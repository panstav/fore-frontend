import { connect } from "unistore/preact";
import { useLocation } from "wouter-preact";

import useModal from "hooks/use-modal";

import actions from "./actions";
import Component from "./DeleteClaim";

export default connect(null, actions)(DeleteClaim);

function DeleteClaim({ claimId, spaceId, deleteClaim }) {

	const [, setLocation] = useLocation();

	const [confirmDeletionModalProps, showConfirmDeletionModal] = useModal({
		title: "Sure you want to delete this Claim?",
		onSubmit: async () => {
			await deleteClaim(claimId);
			setLocation(`/space/${spaceId}`);
		}
	});

	const props = {
		deleteClaim: showConfirmDeletionModal,
		confirmDeletionModalProps
	};

	return Component(props);

}