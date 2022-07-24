import { useContext, useCallback } from 'preact/compat';
import { connect } from 'unistore/preact';

import { ModalContext } from 'contexts';

import useBooleanState from 'hooks/use-boolean-state';

import actions from './actions.js';

import Component from './Support';

export default connect(null, actions)(Support);

function Support({ addClaim }) {

	const { showAddClaimModal } = useContext(ModalContext);

	const [isConfirmed, showConfirmation, hideConfirmation] = useBooleanState(false);

	const addAnotherClaim = useCallback(() => {
		hideConfirmation();
		showAddClaimModal({
			onSubmit(claim) {
				addClaim(claim, { avoidNotifications: true });
				showConfirmation();
			}
		});
	});

	const props = {
		isConfirmed,
		addAnotherClaim
	};

	return Component(props);

}