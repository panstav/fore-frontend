import { connect } from 'unistore/preact';

import pick from 'lodash.pick';
import TimeAgo from 'javascript-time-ago';

import Meta from 'compounds/Meta';

import Loader from 'elements/Loader';

import useEffectUntil from 'hooks/use-effect-until';

import { ClaimDetailContext } from 'contexts';

import actions from './actions';

import Component from './ClaimDetail';

const timeAgo = new TimeAgo();

export default connect(mapStateToProps, actions)(ClaimDetail);

function ClaimDetail({ id, content, owner, createdAt: createdAtTime, isDetailed, getClaimDetail, trackClaimView, isUserCurrentAndOriginalAuthor, spaceId, isAnonymous, usedHere, usedAt }) {

	useEffectUntil(() => getClaimDetail(id), [isDetailed]);

	if (!isDetailed) return <Loader />;

	trackClaimView({ claimId: id });

	const ownerName = isAnonymous ? 'Anonymous' : owner.name;
	const createdAt = {
		fullDate: new Date(createdAtTime).toLocaleString('en-UK', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }),
		timeAgo: timeAgo.format(new Date(createdAtTime), 'mini')
	};

	const claimProps = {
		id,
		content,
		owner,
		createdAt,
		isUserCurrentAndOriginalAuthor,
		spaceId,
		isAnonymous,
		usedHere,
		usedAt
	};

	return <>
		<Meta title={content} description={`Claimed ${createdAt.timeAgo} ago by ${ownerName}`} />
		<ClaimDetailContext.Provider value={claimProps}>
			<Component />
		</ClaimDetailContext.Provider>
	</>;

}

function mapStateToProps({ claims }, { params: { id } }) {
	const claim = claims.find((claim) => claim.id === id);
	if (!claim) return { id };
	return pick(claim, ['id', 'content', 'usedHere', 'usedAt', 'owner', 'createdAt', 'isDetailed', 'spaceId', 'isAnonymous', 'isUserCurrentAndOriginalAuthor']);
}