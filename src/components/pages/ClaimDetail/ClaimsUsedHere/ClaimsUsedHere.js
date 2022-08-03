import { Link } from 'wouter-preact';

import Section from 'wrappers/Section';

import { Power as PowerIcon } from 'elements/Icon';

// keep this order of directions instead of mapping object keys
const directions = ['support', 'opposition'];

export default function ClaimsUsedHere({ support, opposition, addClaimHere }) {
	const claimsUsedHere = { support, opposition };
	return <Section withTopMargin={true} noSidePadding={true}>

		<div className="levem is-align-items-start mb-0 mt-6 px-3">
			{directions.map((direction) => {
				return <div key={direction} className="levem" style={{ width: '49%' }}>
					<div className="has-text-weight-light">In {direction}</div>
					<button className="button is-outlined" onClick={addClaimHere(direction)}>+</button>
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
							const claimClasses = 'fore-claim box is-clickable';
							return <Link key={id} href={`/claim/${id}`}>
								<div data-direction={direction} className={claimClasses} style={claimCssVariables}>
									<div className="levem">
										<Power count={power} />
										<div className="fore-claim-content is-flex-grow-1 pr-1">{content}</div>
									</div>
								</div>
							</Link>;
						})}
					</div>
				</div>;
			})}
		</div>
	</Section>;
}

function Power({ count }) {
	return <div className="fore-claim-power">
		<PowerIcon className="is-medium" />
		<div className="has-text-centered" style={{ lineHeight: 1 }}>
			<span className="">{count}</span>
		</div>
	</div>;
}