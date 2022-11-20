import { useCallback, useContext } from 'preact/compat';
import { connect } from 'unistore/preact';

import classNames from 'classnames';

import { ClaimDetailContext, ModalContext } from 'contexts';

import { Power, Close, Copy } from 'elements/Icon';

import actions from './actions';

import Component from './ClaimOptionsDropdown';

const DEBUG_DROPDOWN = false;
// const DEBUG_DROPDOWN = true;

export default connect(null, actions)(ClaimOptionsDropdown);

function ClaimOptionsDropdown({ isByUser, isPoweredByUser, parentHasUserPower, claimId, claimContent, openClaimId, openDropdown, direction, powerClaim, releasePower, addClaim, disconnectClaim }) {

	const { showAddClaimModal } = useContext(ModalContext);
	const { id: parentClaimId } = useContext(ClaimDetailContext);

	const isOpen = claimId === openClaimId;

	const onBlur = useCallback((event) => {
		// avoid interrupting the click event of another dropdown trigger
		// state will handle closing the dropdown
		if (!isOpen || (event.relatedTarget && event.relatedTarget.className.includes('dropdown'))) return;
		// otherwise assume we've lost focus and close the dropdown
		if (!DEBUG_DROPDOWN) openDropdown();
	}, [openClaimId, openDropdown]);

	const dropDownOptions = [
		[
			(isPoweredByUser ? {
				label: 'Release Power',
				slug: 'release-power',
				icon: Power,
				onClick: () => {
					releasePower({ parentClaimId, direction, childClaimId: claimId });
					return openDropdown();
				}
			} : {
				label: 'Power',
				slug: 'power-claim',
				icon: Power,
				onClick: () => {
					if (parentHasUserPower) return;
					powerClaim({ parentClaimId, direction, childClaimId: claimId });
					return openDropdown();
				},
				disabled: parentHasUserPower,
				tooltip: parentHasUserPower ? 'You\'ve already powered a claim here' : 'Choose Claim as the best argument'
			}),
			{
				label: 'Rephrase',
				slug: 'rephrase-claim',
				icon: Copy,
				onClick: () => {
					showAddClaimModal({
						copiedContent: claimContent,
						onSubmit: addClaim
					});
					return openDropdown();
				}
			}
		],
		!isByUser ? null : [
			{
				label: 'Disconnect',
				slug: 'disconnect',
				icon: ({ className }) => <Close className={classNames('has-text-danger', className)} />,
				onClick: () => {
					disconnectClaim({ parentClaimId, direction, childClaimId: claimId });
					return openDropdown();
				},
				tooltip: 'Remove your Claim from here'
			}
		]
	].reduce((accu, options, index) => {
		if (!options) return accu;
		if (!accu.length) return accu.concat(options.filter((option) => !!option));
		return accu.concat({ isDivider: true, key: `divider-${index}` }, options);
	}, []);

	const props = {
		isOpen,
		dropDownOptions,
		direction,
		openDropdown: () => openDropdown(claimId),
		onBlur
	};

	return Component(props);

}