import { useCallback, useContext, useState } from 'preact/compat';
import { connect } from 'unistore/preact';

import { ClaimDetailContext } from 'contexts';

import useModal from 'hooks/use-modal';

import Component from './ClaimsUsedHere';

import actions from './actions';

export default connect(null, actions)(ClaimsUsedHere);

function ClaimsUsedHere() {

	const { id: parentId, content: parentContent, usedHere: { support: supportUsedHere, opposition: oppositionUsedHere }, addClaimWithUse, connectClaims, trackClaimConnection } = useContext(ClaimDetailContext);

	const [ claimIdWithOpenDropdown, setClaimIdWithOpenDropdown ] = useState();
	const openDropdown = useCallback((claimId) => {
		if (claimIdWithOpenDropdown === claimId) return setClaimIdWithOpenDropdown();
		return setClaimIdWithOpenDropdown(claimId);
	}, [claimIdWithOpenDropdown, setClaimIdWithOpenDropdown]);

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
				}).then(() => trackClaimConnection({ claimId }));
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
		support: supportUsedHere.sort(directedClaimSort),
		opposition: oppositionUsedHere.sort(directedClaimSort),
		totalPowerHere,
		hasUserPoweredSupport,
		hasUserPoweredOpposition,
		addClaimHere,
		addClaimHereModalProps,
		claimIdWithOpenDropdown, openDropdown
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