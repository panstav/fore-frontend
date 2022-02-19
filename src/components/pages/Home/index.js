import { useContext } from 'preact/compat';
import { connect } from 'unistore/preact';

import TimeAgo from 'javascript-time-ago';

import { ModalContext } from 'contexts.js';

import useEffectUntil from 'hooks/use-effect-until';

import actions from './actions.js';

import Component from './Home.js';

const timeAgo = new TimeAgo();

export default connect(mapStateToProps, actions)(Home);

function Home({ claims, fetchedLatest, getLatestClaims, addClaim }) {

	const { showAddClaimModal } = useContext(ModalContext);
	const createNewClaim = () => showAddClaimModal({ onSubmit: ({ content, isAnonymous }) => addClaim({ content, isAnonymous }) });

	useEffectUntil(getLatestClaims, [fetchedLatest]);

	const props = {
		claims,
		isLoading: !fetchedLatest,
		createNewClaim
	};

	return Component(props);
}

function mapStateToProps({ claims, flags: { fetchedLatest } }) {

	const sortedClaims = claims
		.filter(({ isAnonymous }) => !isAnonymous)
		.sort((a, b) => b.createdAt - a.createdAt)
		.map((claim) => {
			claim.createdAtTimeAgo = timeAgo.format(new Date(claim.createdAt), 'mini-now');
			return claim;
		});

	return {
		claims: sortedClaims,
		fetchedLatest
	};
}