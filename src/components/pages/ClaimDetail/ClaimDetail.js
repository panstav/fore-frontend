import Section from 'wrappers/Section';
import Tooltip from 'wrappers/Tooltip';

import Avatar from 'elements/Avatar';
import Username from 'elements/Username';

import ClaimUsedAt from './ClaimUsedAt';
import ClaimsUsedHere from './ClaimsUsedHere';
import DeleteClaim from './DeleteClaim';
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

function ClaimContent({ content, owner, createdAt, isUserCurrentAndOriginalAuthor, spaceId, isAnonymous }) {
	return <>
		<h1 className="title mt-2">{content}</h1>
		<div className="is-flex is-justify-content-space-between is-align-items-center is-size-7">

			<div className='is-flex is-align-items-center'>
				<div className="levem is-justify-content-start mb-0 mr-3">
					<Avatar user={owner} {...{ isAnonymous }} className="mr-3" style={{ width: '2.25rem' }} />
					<div className='is-flex is-align-items-baseline'>
						<Username name={owner?.name} {...{ isAnonymous }} className="fore-claim-owner mr-2" />
						<Tooltip content={createdAt.fullDate}>
							<div className="has-text-grey-light">{createdAt.timeAgo}</div>
						</Tooltip>
					</div>
				</div>
			</div>

			<div className='buttons'>
				{isAnonymous && <ClaimAnonymousClaim />}
				{isUserCurrentAndOriginalAuthor && <DeleteClaim {...{ spaceId }} />}
			</div>

		</div>
	</>;
}