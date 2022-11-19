import Section from 'wrappers/Section';
import WrapConditionally from 'wrappers/WrapConditionally';
import Access from 'wrappers/Access';
import Tooltip from 'wrappers/Tooltip';

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

function ClaimContent({ content, author, createdAt, userIsAuthor, deleteClaim }) {
	return <>
		<h1 className="title mt-2 mb-3">{content}</h1>
		<div className="is-flex is-align-items-center is-size-7">

			<div className="fore-claim-owner levem is-justify-content-start mb-0 mr-3">
				<Avatar userId={author.id} alt={`Profile image of "${author.name}"`} />
				<span>{author.name}</span>
			</div>

			<Tooltip content={createdAt.fullDate}>
				<div className="has-text-grey-light">{createdAt.timeAgo}</div>
			</Tooltip>

			<WrapConditionally if={!userIsAuthor} wrapper={({children}) => {
				return <Access only={(r) => r.ADMIN}>
					{children}
				</Access>;
			}}>
				<div className="is-flex-grow-1 is-flex is-justify-content-end">
					<button onClick={deleteClaim} className="button is-small is-danger is-outlined">Delete</button>
				</div>
			</WrapConditionally>

		</div>
	</>;
}