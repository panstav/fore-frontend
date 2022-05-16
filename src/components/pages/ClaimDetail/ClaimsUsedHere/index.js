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

function ClaimsUsedHere({ parentId, parentContent, supportUsedHere, oppositionUsedHere, addClaimWithUse }) {
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
		support: supportUsedHere,
		opposition: oppositionUsedHere,
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

		// two arrays separated so that component would recognized change in each
		supportUsedHere: claim.usedHere.support,
		oppositionUsedHere: claim.usedHere.opposition
	};
}