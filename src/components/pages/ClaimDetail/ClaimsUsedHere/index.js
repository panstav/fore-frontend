import { connect } from 'unistore/preact';

import withContext from 'lib/with-context';

import { ClaimDetailContext } from 'contexts';

import useModal from 'hooks/use-modal';

import Component from './ClaimsUsedHere';

import actions from './actions';

export default withContext({
	context: ClaimDetailContext,
	map: ({ id }) => ({ currentId: id }),
	component: connect(mapStateToProps, actions)(ClaimsUsedHere)
});

function ClaimsUsedHere({ parentId, parentContent, supportUsedHere, oppositionUsedHere, addClaimWithUse, connectClaim }) {

	const [ addClaimHereModalProps, showAddClaimHereModal ] = useModal();

	const addClaimHere = (direction) => () => {
		return showAddClaimHereModal({
			direction,
			parentContent,
			onSubmit: ({ content, isAnonymous }, event) => {
				const claimId = event.submitter?.dataset.claimId;
				const claimContent = event.submitter?.dataset.claimContent;
				if (claimId) return connectClaim({
					direction,
					childId: claimId,
					childContent: claimContent,
					parentId,
					parentContent
				});
				return addClaimWithUse({
					direction,
					content,
					isAnonymous,
					parentContent,
					parentId
				});
			}
		});
	};

	const props = {
		support: supportUsedHere,
		opposition: oppositionUsedHere,
		addClaimHere,
		addClaimHereModalProps,
		claimsOnBothSides: supportUsedHere.length && oppositionUsedHere.length
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