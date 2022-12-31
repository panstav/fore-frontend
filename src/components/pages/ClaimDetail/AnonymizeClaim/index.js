import { useContext } from "preact/compat";
import { connect } from "unistore/preact";

import { ClaimDetailContext } from "contexts";

import useModal from "hooks/use-modal";

import actions from "./actions";

import Component from "./AnonymizeClaim";

export default connect(null, actions)(AnonymizeClaim);

function AnonymizeClaim({ anonymizeClaim }) {

	const { id: claimId } = useContext(ClaimDetailContext);

	const [confirmAnonymizationModalProps, showConfirmAnonymizationModal] = useModal({
		title: "Sure you want to turn this Claim anonymous?",
		onSubmit: async () => {
			await anonymizeClaim(claimId);
		}
	});

	const props = {
		anonymizeClaim: showConfirmAnonymizationModal,
		confirmAnonymizationModalProps
	};

	return Component(props);

}