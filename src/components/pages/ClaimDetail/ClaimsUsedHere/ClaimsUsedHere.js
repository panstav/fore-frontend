import { Link } from 'wouter-preact';
import classNames from 'classnames';

import Section from 'wrappers/Section';
import Modal from 'wrappers/Modal';

import { Plus } from 'elements/Icon';

import ClaimOptionsDropdown from './ClaimOptionsDropdown';
import AddClaimModal from './AddClaimModal';

// keep this order of directions instead of mapping object keys
const propsByDirection = {
	support: {
		color: 'success',
		contentOptionsOrder: 'row',
		dropdownIsRight: false,
		dropDownStyle: { paddingRight: '2px' }
	},
	opposition: {
		color: 'danger',
		contentOptionsOrder: 'row-reverse',
		dropdownIsRight: true,
		dropDownStyle: {}
	}
};
const directions = Object.keys(propsByDirection);

export default function ClaimsUsedHere({ support, opposition, totalPowerHere, hasUserPoweredSupport, hasUserPoweredOpposition, addClaimHere, addClaimHereModalProps, claimIdWithOpenDropdown, openDropdown }) {
	const claimsUsedHere = { support, opposition };
	return <>
		<Section withSidePadding={false}>
			<div className="is-flex is-justify-content-space-between">
				{directions.map((direction) => {
					const { color, contentOptionsOrder, dropDownStyle } = propsByDirection[direction];
					const buttonClasses = classNames('fore-claim-so-cta box p-2 is-link is-flex is-justify-content-center is-align-items-center', `has-text-${color}`);
					return <div key={direction} className={`${direction}-claims`}>
						<div className={buttonClasses} onClick={addClaimHere(direction)}>
							<Plus className="is-flex-shrink-0 mr-1" />
							<span className='has-text-weight-bold'>Claim in {direction.charAt(0).toUpperCase() + direction.slice(1)}</span>
						</div>
						{claimsUsedHere[direction].map(({ id, content, power, isByUser, isPoweredByUser }) => {
							const styles = { ['--total-power']: totalPowerHere, ['--power']: power };
							const classes = classNames(
								'fore-claim box is-clickable has-background-white',
								isPoweredByUser && 'is-powered-by-user'
							);
							const innerClasses = classNames('fore-claim-inner is-flex reset-anchors', `is-flex is-flex-direction-${contentOptionsOrder}`);
							return <div key={id + direction} data-direction={direction} className={classes} style={styles}>
								<div className={innerClasses}>
									<ClaimOptionsDropdown {...{ claimId: id, claimContent: content, isByUser, isPoweredByUser, hasUserPoweredSupport, hasUserPoweredOpposition, openClaimId: claimIdWithOpenDropdown, openDropdown, direction, style: dropDownStyle }} />
									<Link href={`/claim/${id}`} className="fore-claim-content is-flex-grow-1">{content}</Link>
								</div>
							</div>;
						})}
					</div>;
				})}
			</div>
		</Section>

		<Modal {...addClaimHereModalProps} render={AddClaimModal} />
	</>;
}
