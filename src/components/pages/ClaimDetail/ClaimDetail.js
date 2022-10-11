import Section from 'wrappers/Section';

import Avatar from 'elements/Avatar';

import ClaimUsedAt from './ClaimUsedAt';
import ClaimsUsedHere from './ClaimsUsedHere';

export default function ClaimDetail(props) {
	return <>

		<Section withTopMargin={false} className="mt-3">
			<ClaimUsedAt />
		</Section>

		<Section>
			<ClaimContent {...props} />
		</Section>

		<ClaimsUsedHere/>

	</>;
}

function ClaimContent({ content, author, createdAtTimeAgo }) {
	return <>
		<h1 className="title mt-2 mb-3">{content}</h1>
		<div className="is-flex is-align-items-center is-size-7">
			<div className="fore-claim-owner levem is-justify-content-start mb-0 mr-3">
				<Avatar userId={author.id} alt={`Profile image of "${author.name}"`} />
				<span>{author.name}</span>
			</div>
			<div className="has-text-grey-light">{createdAtTimeAgo}</div>
		</div>
	</>;
}