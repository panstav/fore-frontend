import { Link } from 'wouter-preact';

import Section from 'wrappers/Section';

import { Power } from 'components/elements/Icon';

// keep this order of directions instead of mapping object keys
const directions = ['support', 'opposition'];

export default function ClaimsUsedHere({ support, opposition, addClaimHere }) {
	const claimsUsedHere = { support, opposition };
	return <Section withTopMargin={true} noSidePadding={true}>
		<div className="columns is-fullhd is-gapless">
			{directions.map((direction) => {
				return <div key={direction} className="column">
					<div className="levem p-3 mb-4 mt-6">
						<div className="has-text-weight-light">In {direction}</div>
						<button className="button" onClick={addClaimHere(direction)}>+</button>
					</div>
					<div className="boxes">
						{!claimsUsedHere[direction].length && <div className="has-text-centered has-text-grey-light pt-3 pb-6">None here</div>}
						{claimsUsedHere[direction].map(({ id, content, power }) => {
							const claimCssVariables = `--total-power: ${claimsUsedHere.totalPower}; --power: ${power};`;
							const claimClasses = 'box is-radiusless is-shadowless is-clickable px-2 py-4';
							return <Link key={id} href={`/claim/${id}`}>
								<div data-direction={direction} className={claimClasses} style={claimCssVariables}>
									<div className="levem">
										<span className="has-text-right is-size-7" style="line-height: 1; min-width: 3ch;">{power}</span>
										<Power style="width: 1.5rem; min-width: 1.5rem;"/>
										<div className="is-size-6 is-flex-grow-1 ml-3">{content}</div>
									</div>
								</div>
							</Link>;
						})}
					</div>
				</div>;
			}) }
		</div>
	</Section>;
}