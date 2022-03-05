import { useContext } from 'preact/compat';
import { connect } from 'unistore/preact';

import withContext from 'lib/with-context';

import { ModalContext, ClaimDetailContext } from 'contexts';

import Component from './ClaimsUsedHere';

import actions from './actions';

import { claimsUse } from 'constants';

export default withContext({
	context: ClaimDetailContext,
	map: ({ id }) => ({ currentId: id }),
	component: connect(mapStateToProps, actions)(ClaimsUsedHere)
});

function ClaimsUsedHere({ parentId, parentContent, usedHere, addClaimWithUse }) {

	const { showAddClaimModal } = useContext(ModalContext);

	const addClaimHere = (direction) => () => showAddClaimModal({
		contextTitle: `In ${claimsUse[direction]} "${parentContent}"`,
		onSubmit: ({ content, isAnonymous }) => addClaimWithUse({
			content,
			isAnonymous,
			parentContent,
			parentId,
			direction
		})
	});

	const props = {
		claimsUsedHere: usedHere,
		addClaimHere
	};

	return Component(props);
}

function mapStateToProps({ claims }, { currentId }) {
	const claim = claims.find((claim) => claim.id === currentId);
	if (!claim) return {};

	return {
		parentId: claim.id,
		parentContent: claim.content,
		usedHere: claim.usedHere
	};
}