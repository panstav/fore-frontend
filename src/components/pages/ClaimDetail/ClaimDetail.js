import Section from 'wrappers/Section';
import Tooltip from 'wrappers/Tooltip';

import Avatar from 'elements/Avatar';
import Username from 'elements/Username';

import ClaimUsedAt from './ClaimUsedAt';
import ClaimsUsedHere from './ClaimsUsedHere';
import Delete from './DeleteClaim';
import Anonymize from './AnonymizeClaim';
import ClaimAnonymous from './ClaimAnonymousClaim';

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

function ClaimContent({ content, author, createdAt, userIsAuthor, spaceId, isAnonymous }) {
	return <>
		<h1 className="title mt-2 mb-3">{content}</h1>
		<div className="is-flex is-justify-content-space-between is-align-items-center is-size-7">

			<div className='is-flex is-align-items-center'>
				<div className="fore-claim-owner levem is-justify-content-start mb-0 mr-3">
					<Avatar {...{ author, isAnonymous }} className="mr-3" />
					<Username {...{ author, isAnonymous }} />
				</div>

				<Tooltip content={createdAt.fullDate}>
					<div className="has-text-grey-light">{createdAt.timeAgo}</div>
				</Tooltip>
			</div>

			<div className='buttons'>
				{isAnonymous && <ClaimAnonymous />}
				{userIsAuthor && <Anonymize />}
				{!userIsAuthor && <Follow />}
				<Delete {...{ userIsAuthor, spaceId }} />
			</div>

		</div>
	</>;
}