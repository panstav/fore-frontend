import { Link } from 'wouter-preact';
import classNames from 'classnames';

import Section from 'wrappers/Section';
import Modal from 'wrappers/Modal';

import ClaimOptionsDropdown from './ClaimOptionsDropdown';
import AddClaimModal from './AddClaimModal';

// keep this order of directions instead of mapping object keys
const propsByDirection = {
	support: {
		label: 'Support',
		color: 'success',
		contentOptionsOrder: 'row',
		dropdownIsRight: false,
		dropDownStyle: { paddingRight: '2px' }
	},
	opposition: {
		label: 'Opposition',
		color: 'danger',
		contentOptionsOrder: 'row-reverse',
		dropdownIsRight: true,
		dropDownStyle: {}
	}
};
const directions = Object.keys(propsByDirection);

export default function ClaimsUsedHere({ support, opposition, totalPowerHere, parentHasUserPower, addClaimHere, addClaimHereModalProps, claimIdWithOpenDropdown, openDropdown }) {
	const claimsUsedHere = { support, opposition };
	return <>
		<Section noSidePadding={true} className="is-flex is-justify-content-space-between mt-6 px-2 mb-3">
			{directions.map((direction) => {
				const { label, color } = propsByDirection[direction];
				const buttonColors = classNames('button is-small has-text-weight-bold has-text-white', `has-background-${color}`);
				return <button key={direction} onClick={addClaimHere(direction)} className={buttonColors} style={{ borderRadius: '0.25em' }}>
					{label}
				</button>;
			})}
		</Section>
		<Section noSidePadding={true}>
			<div className="is-flex is-justify-content-space-between">
				{directions.map((direction) => {
					const { contentOptionsOrder, dropDownStyle } = propsByDirection[direction];
					return <div key={direction} className={`${direction}-claims`}>
						{!claimsUsedHere[direction].length && <div className="has-text-centered has-text-grey-light pt-3 pb-6">None</div>}
						{claimsUsedHere[direction].map(({ id, content, power, isByUser, isPoweredByUser }) => {
							const styles = { ['--total-power']: totalPowerHere, ['--power']: power };
							const classes = classNames(
								'fore-claim box is-clickable has-background-white',
								isPoweredByUser && 'is-powered-by-user'
							);
							const innerClasses = classNames('fore-claim-inner is-flex reset-anchors', `is-flex is-flex-direction-${contentOptionsOrder}`);
							return <div key={id + direction} data-direction={direction} className={classes} style={styles}>
								<div className={innerClasses}>
									<ClaimOptionsDropdown {...{ claimId: id, claimContent: content, isByUser, isPoweredByUser, parentHasUserPower, openClaimId: claimIdWithOpenDropdown, openDropdown, direction, style: dropDownStyle }} />
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
