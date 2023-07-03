import Section from 'wrappers/Section';
import Tooltip from 'wrappers/Tooltip';

import Avatar from 'elements/Avatar';
import Username from 'elements/Username';

import ClaimUsedAt from './ClaimUsedAt';
import ClaimsUsedHere from './ClaimsUsedHere';
import DeleteClaim from './DeleteClaim';
import Anonymize from './AnonymizeClaim';
import ClaimAnonymousClaim from './ClaimAnonymousClaim';

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

function ClaimContent({ content, owner, createdAt, userIsOwner, isUserCurrentAndOriginalAuthor, spaceId, isAnonymous }) {
	return <>
		<h1 className="title mt-2 mb-3">{content}</h1>
		<div className="is-flex is-justify-content-space-between is-align-items-center is-size-7">

			<div className='is-flex is-align-items-center'>
				<div className="fore-claim-owner levem is-justify-content-start mb-0 mr-3">
					<Avatar user={owner} {...{ isAnonymous }} className="mr-3" />
					<Username name={owner.name} {...{ isAnonymous }} />
				</div>

				<Tooltip content={createdAt.fullDate}>
					<div className="has-text-grey-light">{createdAt.timeAgo}</div>
				</Tooltip>
			</div>

			<div className='buttons'>
				{isAnonymous && <ClaimAnonymousClaim />}
				{userIsOwner && <Anonymize />}
				{isUserCurrentAndOriginalAuthor && <DeleteClaim {...{ spaceId }} />}
			</div>

		</div>
	</>;
}