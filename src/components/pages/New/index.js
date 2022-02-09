import { connect } from 'unistore/preact';

import TimeAgo from 'javascript-time-ago';

import Loader from 'base/Loader.js';

import useEffectUntil from 'hooks/use-effect-until';

import actions from './actions.js';

import Component from './New.js';

const timeAgo = new TimeAgo();

export default connect(mapStateToProps, actions)(New);

function New({ getLatestClaims, claims, fetchedLatest }) {

	useEffectUntil(getLatestClaims, [fetchedLatest]);

	if (!claims.length) return <Loader/>;

	const props = {
		claims
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