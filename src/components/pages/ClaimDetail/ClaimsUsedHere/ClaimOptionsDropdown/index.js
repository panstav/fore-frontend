import { useCallback, useContext } from 'preact/compat';
import { connect } from 'unistore/preact';
import classNames from 'classnames';

import { isAuthCreateClaims, isAuthPowerClaims } from 'lib/is-auth';
import { ModalContext } from 'contexts';

import { Power, Close, Copy } from 'elements/Icon';

import actions from './actions';
import Component from './ClaimOptionsDropdown';

export default connect(mapStateToProps, actions)(ClaimOptionsDropdown);

function ClaimOptionsDropdown({ parentClaimId, isByUser, isPoweredByUser, hasUserPoweredSupport, hasUserPoweredOpposition, claimId, claimContent, openClaimId, openDropdown, direction, powerClaim, releasePower, addClaim, disconnectClaim, canPowerClaims, canCreateClaims }) {

	const { showAddClaimModal } = useContext(ModalContext);

	const hasUserPoweredDirection = direction === 'support' ? hasUserPoweredSupport : hasUserPoweredOpposition;

	const isOpen = claimId === openClaimId;

	const onBlur = useCallback((event) => {
		// avoid interrupting the click event of another dropdown trigger
		// state will handle closing the dropdown
		if (!isOpen || (event.relatedTarget && event.relatedTarget.className.includes('dropdown'))) return;
		// otherwise assume we've lost focus and close the dropdown
		openDropdown();
	}, [openClaimId, openDropdown]);

	const dropDownOptions = [
		[
			canPowerClaims && (isPoweredByUser ? {
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
					if (isByUser || hasUserPoweredDirection) return;
					powerClaim({ parentClaimId, direction, childClaimId: claimId });
					return openDropdown();
				},
				disabled: isByUser || hasUserPoweredDirection,
				tooltip: (!isByUser && !hasUserPoweredDirection)
					? `Choose this Claim as the best ${direction}`
					: isByUser
						? `You can only power Claims created by others`
						: hasUserPoweredDirection
							? `You've already powered a ${direction} to this Claim`
							: null
			}),
			canCreateClaims && {
				label: 'Copy',
				slug: 'copy-claim',
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
		isByUser && [
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

function mapStateToProps() {
	return {
		canCreateClaims: isAuthCreateClaims(),
		canPowerClaims: isAuthPowerClaims()
	};
}