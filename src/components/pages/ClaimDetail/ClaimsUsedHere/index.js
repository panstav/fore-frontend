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

function ClaimsUsedHere({ parentId, parentContent, supportUsedHere, oppositionUsedHere, addClaimWithUse, connectClaims }) {

	const [ addClaimHereModalProps, showAddClaimHereModal ] = useModal();

	const addClaimHere = (direction) => () => {
		return showAddClaimHereModal({
			direction,
			parentContent,
			onSubmit: ({ content, isAnonymous }, event) => {
				const claimId = event.submitter?.dataset.claimId;
				const claimContent = event.submitter?.dataset.claimContent;
				if (claimId) return connectClaims({
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

	const totalPower = {
		support: countPower(supportUsedHere),
		opposition: countPower(oppositionUsedHere)
	};
	const totalPowerHere = totalPower.support + totalPower.opposition;
	const isDominating = (direction) => totalPower[direction] > totalPowerHere - totalPower[direction];

	const props = {
		support: supportUsedHere,
		opposition: oppositionUsedHere,
		totalPowerHere,
		isDominating,
		addClaimHere,
		addClaimHereModalProps,
		claimsOnBothSides: supportUsedHere.length && oppositionUsedHere.length
	};

	return Component(props);

	function countPower(claims) {
		return claims.reduce((total, claim) => total + claim.power, 0);
	}

}

function mapStateToProps({ claims }, { currentId }) {

	const claim = claims.find((claim) => claim.id === currentId);
	if (!claim) return {};

	return {
		parentId: claim.id,
		parentContent: claim.content,

		// two arrays separated so that component would recognized change in each
		supportUsedHere: claim.usedHere.support
			.sort(directedClaimSort),
		oppositionUsedHere: claim.usedHere.opposition
			.sort(directedClaimSort)
	};

	function directedClaimSort(a, b) {
		if (a.poweredByUser) return -1;
		return b.power - a.power;
	}

}