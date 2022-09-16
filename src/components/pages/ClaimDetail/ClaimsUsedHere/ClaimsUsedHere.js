import { Link } from 'wouter-preact';
import classNames from 'classnames';

import Section from 'wrappers/Section';
import Modal from 'wrappers/Modal';

import ClaimOptionsDropdown from './ClaimOptionsDropdown';
import AddClaimModal from './AddClaimModal';

// keep this order of directions instead of mapping object keys
const propsByDirection = {
	support: {
		label: 'Supported',
		color: 'success',
		contentOptionsOrder: 'row',
		dropdownIsRight: false,
		dropDownStyle: { paddingRight: '2px' }
	},
	opposition: {
		label: 'Opposed',
		color: 'danger',
		contentOptionsOrder: 'row-reverse',
		dropdownIsRight: true,
		dropDownStyle: {}
	}
};
const directions = Object.keys(propsByDirection);

export default function ClaimsUsedHere({ support, opposition, totalPowerHere, parentHasUserPower, isDominating, claimsOnBothSides, addClaimHere, addClaimHereModalProps, claimIdWithOpenDropdown, openDropdown }) {
	const claimsUsedHere = { support, opposition };
	return <>
		<Section noSidePadding={true}>

			<div className="levem is-align-items-start mb-0 mt-6 px-3 is-relative">
				{directions.map((direction) => {
					const { label, color } = propsByDirection[direction];
					const labelClasses = classNames(
						'is-size-7 has-text-weight-bold',
						`has-text-${color}`
					);
					return <div key={direction} className="is-flex is-justify-content-center is-align-items-center py-4" style={{ width: '49%' }}>
						<div className={labelClasses}>{label} by</div>
						<button className={`button is-small has-background-${color}-light px-2 fore-add-${direction}`} onClick={addClaimHere(direction)}>+</button>
					</div>;
				})}
			</div>
			<div className="is-flex">
				{directions.map((direction) => {
					const { contentOptionsOrder, dropDownStyle } = propsByDirection[direction];
					return <div key={direction} style={{ width: '50%', zIndex: isDominating(direction) ? 10 : 1 }}>
						<div className="boxes">
							{!claimsUsedHere[direction].length && <div className="has-text-centered has-text-grey-light pt-3 pb-6">None</div>}
							{claimsUsedHere[direction].map(({ id, content, power, isByUser, isPoweredByUser }) => {
								const styles = { ['--total-power']: totalPowerHere, ['--power']: power, ...(isPoweredByUser ? {} : { ['--bg-color']: 'transparent' } ) };
								const classes = classNames('fore-claim box is-clickable has-background-white', claimsOnBothSides ? 'flat-across' : '');
								const innerClasses = classNames('is-flex is-align-items-center reset-anchors', `is-flex is-flex-direction-${contentOptionsOrder}`);
								return <div key={id}>
									<div data-direction={direction} className={classes} style={styles}>
										<div className={innerClasses}>
											<ClaimOptionsDropdown {...{ claimId: id, claimContent: content, isByUser, isPoweredByUser, parentHasUserPower, openClaimId: claimIdWithOpenDropdown, openDropdown, direction, style: dropDownStyle }} />
											<Link href={`/claim/${id}`} className="fore-claim-content is-flex-grow-1">{content}</Link>
										</div>
									</div>
								</div>;
							})}
						</div>
					</div>;
				})}
			</div>
		</Section>

		<Modal {...addClaimHereModalProps} render={AddClaimModal} />
	</>;
}
