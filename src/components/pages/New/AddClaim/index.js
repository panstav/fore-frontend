import { memo } from 'preact/compat';
import { connect } from 'unistore/preact';

import regardless from 'lib/regardless.js';

import useModal from 'hooks/use-modal.js';

import actions from './actions';

import Component from './AddClaim';

export default connect(null, actions)(memo(AddClaim, regardless));

function AddClaim({ addClaim }) {

	const [addClaimModalProps, openAddClaimModal, closeAddClaimModal] = useModal({
		autoClose: false,
		title: 'You\'re claiming that:',
		onSubmit: ({ content, isAnonymous }) => {
			closeAddClaimModal();
			return addClaim({ content, isAnonymous });
		}
	});

	const props = {
		openAddClaimModal, addClaimModalProps
	};

	return Component(props);
}