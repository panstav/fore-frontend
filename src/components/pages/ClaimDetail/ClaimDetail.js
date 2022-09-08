import Section from 'wrappers/Section';

import ClaimUsedAt from './ClaimUsedAt';
import ClaimsUsedHere from './ClaimsUsedHere';

export default function ClaimDetail({ content, author, createdAtTimeAgo }) {
	return <>

		<Section className="mt-3">
			<ClaimUsedAt />
		</Section>

		<Section withTopMargin={true}>
			<h1 className="title mt-2 mb-3">{content}</h1>
			<div className="is-flex is-align-items-center is-size-7">
				<div className="fore-claim-owner levem is-justify-content-start mb-0 mr-3">
					<img className="mr-2 is-round" src={author.profileImageUrl} alt={author.name} />
					<span>{author.name}</span>
				</div>
				<div className="has-text-grey-light">{createdAtTimeAgo}</div>
			</div>
		</Section>

		<ClaimsUsedHere/>

	</>;
}