import { useCallback, useState } from 'preact/compat';
import { connect } from 'unistore/preact';

import { isAuthCreateClaims } from 'lib/is-auth';
import useModal from 'hooks/use-modal';

import actions from './actions';
import Component from './ClaimsUsedHere';

export default connect(mapStateToProps, actions)(ClaimsUsedHere);

function ClaimsUsedHere({ claimId: parentId, content: parentContent, spaceId, supportUsedHere, oppositionUsedHere, addClaimWithUse, connectClaims, trackClaimConnection, canCreateClaims }) {

	const [ claimIdWithOpenDropdown, setClaimIdWithOpenDropdown ] = useState();
	const openDropdown = useCallback((claimId) => {
		if (claimIdWithOpenDropdown === claimId) return setClaimIdWithOpenDropdown();
		return setClaimIdWithOpenDropdown(claimId);
	}, [claimIdWithOpenDropdown, setClaimIdWithOpenDropdown]);

	const [ addClaimHereModalProps, showAddClaimHereModal ] = useModal();

	const addClaimHere = (direction) => () => {
		return showAddClaimHereModal({
			direction,
			parentClaimId: parentId,
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
				}).then(() => trackClaimConnection({ claimId, claimContent, spaceId }));
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
	const hasUserPoweredSupport = supportUsedHere.some((claim) => claim.isPoweredByUser);
	const hasUserPoweredOpposition = oppositionUsedHere.some((claim) => claim.isPoweredByUser);

	const props = {
		parentClaimId: parentId,
		support: supportUsedHere.sort(directedClaimSort),
		opposition: oppositionUsedHere.sort(directedClaimSort),
		totalPowerHere,
		hasUserPoweredSupport,
		hasUserPoweredOpposition,
		addClaimHere,
		addClaimHereModalProps,
		claimIdWithOpenDropdown, openDropdown,
		canCreateClaims
	};

	return Component(props);

	function countPower(claims) {
		return claims.reduce((total, claim) => total + claim.power, 0);
	}

	function directedClaimSort(a, b) {
		// powered by user claims should be first
		if (a.isPoweredByUser && !b.isPoweredByUser) return -1;
		if (!a.isPoweredByUser && b.isPoweredByUser) return 1;
		// if a and b are both powered by user or none is - sort by power
		return b.power - a.power;
	}

}

function mapStateToProps({ claims }, { claimId }) {

	const claim = claims.find((claim) => claim.id === claimId);
	const { support: supportUsedHere, opposition: oppositionUsedHere } = claim.usedHere;

	return {
		canCreateClaims: isAuthCreateClaims(),
		supportUsedHere,
		oppositionUsedHere,
	};
}