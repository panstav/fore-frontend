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

function ClaimDetail({ id, content, author, createdAtTime, isDetailed, getClaimDetail, trackClaimView }) {

	useEffectUntil(() => getClaimDetail(id), [isDetailed]);

	if (!isDetailed) return <Loader />;

	trackClaimView({ claimId: id });

	const createdAt = {
		fullDate: new Date(createdAtTime).toLocaleString('en-UK', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }),
		timeAgo: timeAgo.format(new Date(createdAtTime), 'mini')
	};

	const props = {
		content, author, createdAt
	};

	return <>
		<Meta title={content} description={`Claimed ${createdAt.timeAgo} ago by ${author.name}`} />
		<ClaimDetailContext.Provider value={{ id }}>
			<Component {...props} />
		</ClaimDetailContext.Provider>
	</>;
}

function mapStateToProps({ claims }, { params: { id } }) {
	const claim = claims.find((claim) => claim.id === id);
	if (!claim) return { id };

	const { content, usedHere, author, createdAt: createdAtTime, isDetailed } = claim;
	return { id, content, usedHere, author, createdAtTime, isDetailed };
}