import Section from 'wrappers/Section';

import ClaimUsedAt from './ClaimUsedAt';
import ClaimsUsedHere from './ClaimsUsedHere';

export default function ClaimDetail({ content, author, createdAtTimeAgo }) {
	return <>
		<Section noSidePadding={true}>
			<ClaimUsedAt/>
		</Section>

		<Section withTopMargin={true}>
			<div className="title is-1 mb-3">{content}</div>
			<div className="level is-mobile">
				<div className="has-text-grey-light" style="width: 5ch; min-width: 5ch;">{createdAtTimeAgo}</div>
				<div className="is-flex-grow-1 level is-justify-content-start is-mobile m-0">
					<span>By</span>
					<img width={40} height={40} className="mx-2 is-round" src={author.profileImageUrl} alt={author.name}/>
					<span>{author.name}</span>
				</div>
			</div>
		</Section>

		<ClaimsUsedHere/>

	</>;
}