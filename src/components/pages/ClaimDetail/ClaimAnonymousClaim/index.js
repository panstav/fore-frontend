import { connect } from "unistore/preact";

import useModal from "hooks/use-modal";

import actions from "./actions";
import Component from "./ClaimAnonymousClaim";

export default connect(null, actions)(ClaimAnonymousClaim);

function ClaimAnonymousClaim({ claimId, spaceId, claimAnonymousClaim }) {

	const [confirmClaimingAnonymousClaimModalProps, showConfirmClaimAnonymousClaimModal] = useModal({
		title: "Sure you want to claim this as your own?",
		onSubmit: async () => {
			await claimAnonymousClaim({ claimId, spaceId });
		}
	});

	const props = {
		claimAnonymousClaim: showConfirmClaimAnonymousClaimModal,
		confirmClaimingAnonymousClaimModalProps
	};

	return Component(props);

}