import { useContext } from "preact/compat";
import { connect } from "unistore/preact";

import { ClaimDetailContext } from "contexts";

import useModal from "hooks/use-modal";

import actions from "./actions";

import Component from "./ClaimAnonymousClaim";

export default connect(null, actions)(ClaimAnonymousClaim);

function ClaimAnonymousClaim({ claimAnonymousClaim }) {

	const { id: claimId } = useContext(ClaimDetailContext);

	const [confirmClaimingAnonymousClaimModalProps, showConfirmClaimAnonymousClaimModal] = useModal({
		title: "Sure you want to Claim this as your own?",
		onSubmit: async () => {
			await claimAnonymousClaim(claimId);
		}
	});

	const props = {
		claimAnonymousClaim: showConfirmClaimAnonymousClaimModal,
		confirmClaimingAnonymousClaimModalProps
	};

	return Component(props);

}