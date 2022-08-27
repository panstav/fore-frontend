import { Link } from 'wouter-preact';
import classNames from 'classnames';

import Section from 'wrappers/Section';
import Modal from 'wrappers/Modal';

import { Power } from 'elements/Icon';

import AddClaimModal from './AddClaimModal';

// keep this order of directions instead of mapping object keys
const directions = ['support', 'opposition'];

export default function ClaimsUsedHere({ support, opposition, claimsOnBothSides, addClaimHere, addClaimHereModalProps }) {
	const claimsUsedHere = { support, opposition };
	return <>
		<Section noSidePadding={true}>

			<div className="levem is-align-items-start mb-0 mt-6 px-3">
				{directions.map((direction) => {
					const label = { support: 'Supported', opposition: 'Opposed' }[direction];
					const labelClasses = classNames(
						'is-size-7 has-text-weight-bold',
						`has-text-${{ support: 'success', opposition: 'danger' }[direction]}`
					);
					return <div key={direction} className="levem" style={{ width: '49%' }}>
						<div className={labelClasses}>{label} by</div>
						<button className="button is-small" onClick={addClaimHere(direction)}>+</button>
					</div>;
				})}
			</div>
			<div className="is-flex">
				{directions.map((direction) => {
					return <div key={direction} style={{ width: '50%' }}>
						<div className="boxes">
							{!claimsUsedHere[direction].length && <div className="has-text-centered has-text-grey-light pt-3 pb-6">None here</div>}
							{claimsUsedHere[direction].map(({ id, content, power }) => {
								const claimCssVariables = `--total-power: ${claimsUsedHere.totalPower}; --power: ${power};`;
								const claimClasses = classNames('fore-claim box is-clickable', claimsOnBothSides ? 'flat-across' : '');
								return <Link key={id} href={`/claim/${id}`}>
									<div data-direction={direction} className={claimClasses} style={claimCssVariables}>
										<div className="levem">
											<Power className="is-size-7 is-flex-shrink-0" />
											<div className="fore-claim-content is-flex-grow-1 pr-1">{content}</div>
										</div>
									</div>
								</Link>;
							})}
						</div>
					</div>;
				})}
			</div>
		</Section>

		<Modal {...addClaimHereModalProps} render={AddClaimModal} />
	</>;
}