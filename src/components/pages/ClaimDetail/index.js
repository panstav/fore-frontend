import { connect } from 'unistore/preact';

import TimeAgo from 'javascript-time-ago';
import pick from 'lodash.pick';

import Loader from 'base/Loader';

import useEffectUntil from 'hooks/use-effect-until';
import useModal from 'hooks/use-modal.js';

import { ClaimDetailContext } from 'contexts';

import actions from './actions';

import Component from './ClaimDetail';

import { claimsUse } from 'constants';

const timeAgo = new TimeAgo();

export default connect(mapStateToProps, actions)(ClaimDetail);

function ClaimDetail({ id, content, author, usedIn, createdAt, getClaimDetail }) {

	useEffectUntil(() => getClaimDetail(id), [content]);

	const [usedInModalProps, showUsedInModal] = useModal(({ direction, claims }) => ({
		title: `Used in ${claimsUse[direction]}`,
		claims
	}));

	if (!content) return <Loader/>;

	const showUsedIn = (direction) => () => {
		const claims = usedIn[direction];
		if (!claims.length) return null;
		showUsedInModal({ direction, claims });
	};

	const createdAtTimeAgo = timeAgo.format(new Date(createdAt), 'mini');

	const props = {
		content, usedIn, author, createdAtTimeAgo,
		showUsedIn, usedInModalProps
	};

	return <ClaimDetailContext.Provider value={{ id }}>
		<Component {...props}/>
	</ClaimDetailContext.Provider>;
}

function mapStateToProps({ claims }, { params: { id } }) {
	const claim = claims.find((claim) => claim.id === id);
	if (!claim) return { id };

	return pick(claim, ['id', 'usedIn', 'content', 'author', 'createdAt']);
}