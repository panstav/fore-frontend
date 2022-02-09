import { connect } from 'unistore/preact';

import TimeAgo from 'javascript-time-ago';

import { ClaimDetailContext } from 'contexts';

import Loader from 'base/Loader';

import useEffectUntil from 'hooks/use-effect-until';
import useModal from 'hooks/use-modal.js';

import actions from './actions';

import Component from './ClaimDetail';

const timeAgo = new TimeAgo();

export default connect(mapStateToProps, actions)(ClaimDetail);

function ClaimDetail({ params: { id: claimIdRequested }, claim, getClaimDetail }) {

	useEffectUntil(() => getClaimDetail(claimIdRequested), ['id' in claim]);

	const [usedInModalProps, showUsedInModal] = useModal(({ direction, claims }) => ({
		title: `Used in ${{ support: 'support of', opposition: 'opposition to' }[direction]}`,
		claims
	}));

	if (!claim.id) return <Loader/>;

	const showUsedIn = (direction) => () => {
		const claims = claim.usedIn[direction];
		if (!claims.length) return null;
		showUsedInModal({ direction, claims });
	};

	const props = {
		showUsedIn, usedInModalProps
	};

	return <ClaimDetailContext.Provider value={claim}>
		<Component {...props}/>
	</ClaimDetailContext.Provider>;
}

function mapStateToProps({ claims }, { params: { id } }) {
	const claim = claims.find((claim) => claim.id === id);
	if (!claim) return { claim: {} };

	claim.createdAtTimeAgo = timeAgo.format(new Date(claim.createdAt), 'mini');
	claim.usedHere.totalPower = claim.usedHere.support.concat(claim.usedHere.opposition).reduce((accu, { power }) => accu + power, 0);
	claim.usedHere.support = claim.usedHere.support.sort((a, b) => b.power - a.power);
	claim.usedHere.opposition = claim.usedHere.opposition.sort((a, b) => b.power - a.power);
	return { claim };
}