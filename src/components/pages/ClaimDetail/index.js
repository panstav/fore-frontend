import { connect } from 'unistore/preact';

import TimeAgo from 'javascript-time-ago';
import pick from 'lodash.pick';

import Loader from 'components/elements/Loader';

import useEffectUntil from 'hooks/use-effect-until';

import { ClaimDetailContext } from 'contexts';

import actions from './actions';

import Component from './ClaimDetail';

const timeAgo = new TimeAgo();

export default connect(mapStateToProps, actions)(ClaimDetail);

function ClaimDetail({ id, content, author, createdAt, isDetailed, getClaimDetail }) {

	useEffectUntil(() => getClaimDetail(id), [isDetailed]);

	if (!isDetailed) return <Loader />;

	const createdAtTimeAgo = timeAgo.format(new Date(createdAt), 'mini');

	const props = {
		content, author, createdAtTimeAgo
	};

	return <ClaimDetailContext.Provider value={{ id }}>
		<Component {...props} />
	</ClaimDetailContext.Provider>;
}

function mapStateToProps({ claims }, { params: { id } }) {
	const claim = claims.find((claim) => claim.id === id);
	if (!claim) return { id };

	return pick(claim, ['id', 'content', 'usedHere', 'author', 'createdAt', 'isDetailed']);
}