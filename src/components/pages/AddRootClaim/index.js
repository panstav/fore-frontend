import { useContext, useCallback } from 'preact/compat';
import { connect } from 'unistore/preact';

import { ModalContext } from 'contexts';

import useBooleanState from 'hooks/use-boolean-state';

import actions from './actions.js';

import Component from './AddRootClaim';

export default connect(null, actions)(AddRootClaim);

function AddRootClaim({ addClaim }) {

	const { showAddClaimModal } = useContext(ModalContext);

	const [isShowingExpaliner, , hideExplainer] = useBooleanState(true);
	const [isConfirmed, showConfirmation, hideConfirmation] = useBooleanState(false);

	const addAnotherClaim = useCallback(() => {
		hideExplainer();
		hideConfirmation();
		showAddClaimModal({
			hideable: false,
			onSubmit(claim) {
				addClaim(claim);
				showConfirmation();
			}
		});
	});

	const props = {
		isShowingExpaliner,
		isConfirmed,
		addAnotherClaim
	};

	return Component(props);

}