import { Link } from 'wouter-preact';

import Section from 'wrappers/Section.js';

import AddClaim from './AddClaim';

export default function New({ claims }) {
	return <>

		<Section withTopMargin={true}>
			<AddClaim/>
		</Section>

		<Section withTopMargin={true} noSidePadding={true}>
			<div className="boxes">
				{claims.map(({ id, content, createdAtTimeAgo }) => {
					return <Link href={`/claim/${id}`} key={id}>
						<div className="box is-clickable">
							<div className="levem">
								<div className="is-size-7 has-text-grey-light" style="width: 5.5ch; min-width: 5.5ch; line-height: 1;">{createdAtTimeAgo}</div>
								<div className="mr-2 text-wrap is-size-6 is-flex-grow-1 has-text-weight-bold" style="line-height: 1;">{content}</div>
							</div>
						</div>
					</Link>;
				})}
			</div>
		</Section>

	</>;
}