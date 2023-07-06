import { connect } from 'unistore/preact';

import TimeAgo from 'javascript-time-ago';

import Meta from 'compounds/Meta';

import Loader from 'elements/Loader';

import useEffectUntil from 'hooks/use-effect-until';

import { ClaimDetailContext } from 'contexts';

import actions from './actions';

import Component from './ClaimDetail';

const timeAgo = new TimeAgo();

export default connect(mapStateToProps, actions)(ClaimDetail);

function ClaimDetail({ id, content, owner, createdAtTime, isDetailed, getClaimDetail, trackClaimView, userIsOwner, isUserCurrentAndOriginalAuthor, spaceId, isAnonymous }) {

	useEffectUntil(() => getClaimDetail(id), [isDetailed]);

	if (!isDetailed) return <Loader />;

	trackClaimView({ claimId: id });

	const ownerName = isAnonymous ? 'Anonymous' : owner.name;
	const createdAt = {
		fullDate: new Date(createdAtTime).toLocaleString('en-UK', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }),
		timeAgo: timeAgo.format(new Date(createdAtTime), 'mini')
	};

	const props = {
		content,
		owner,
		createdAt,
		userIsOwner,
		isUserCurrentAndOriginalAuthor,
		spaceId,
		isAnonymous
	};

	return <>
		<Meta title={content} description={`Claimed ${createdAt.timeAgo} ago by ${ownerName}`} />
		<ClaimDetailContext.Provider value={{ id }}>
			<Component {...props} />
		</ClaimDetailContext.Provider>
	</>;

}

function mapStateToProps({ claims, user }, { params: { id } }) {
	const claim = claims.find((claim) => claim.id === id);
	if (!claim) return { id };

	const { content, usedHere, owner, createdAt: createdAtTime, isDetailed, spaceId, isByUser, isAnonymous, isUserCurrentAndOriginalAuthor } = claim;
	const userIsOwner = !isAnonymous && (isByUser || user.id === owner.id);

	return { id, content, usedHere, owner, createdAtTime, isDetailed, isAnonymous, userIsOwner, spaceId, isUserCurrentAndOriginalAuthor };
}