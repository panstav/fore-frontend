import { useContext } from 'preact/compat';
import { Link } from 'wouter-preact';

import { ClaimDetailContext } from 'contexts';

import Section from 'wrappers/Section';

import { Power } from 'base/Icon';

const directions = ['support', 'opposition'];

export default function ClaimsUsedHere() {
	const { usedHere } = useContext(ClaimDetailContext);
	return <Section withTopMargin={true} noSidePadding={true}>
		<div className="columns is-fullhd is-gapless">
			{directions.map((direction) => {
				return <div key={direction} className="column">
					<div className="p-3 mb-4 mt-6 title is-3 has-text-weight-light">In {direction}</div>
					<div className="boxes">
						{!usedHere[direction].length && <div className="has-text-centered has-text-grey-light pt-3 pb-6">None here</div>}
						{usedHere[direction].map(({ id, content, power }) => {
							const claimCssVariables = `--total-power: ${usedHere.totalPower}; --power: ${power};`;
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