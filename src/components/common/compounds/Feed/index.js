import { connect } from 'unistore/preact';

import TimeAgo from 'javascript-time-ago';

import actions from './actions.js';

import Meta from 'compounds/Meta.js';

import Component from './Feed.js';

const timeAgo = new TimeAgo();

export default connect(mapStateToProps, actions)(Feed);

function Feed({ spaceName, claims, loadMoreClaims, hasLoadedAll }) {

	if (!spaceName) return null;

	const sortedClaims = claims
		.sort((a, b) => b.createdAt - a.createdAt)
		.map((claim) => {
			claim.createdAtTimeAgo = timeAgo.format(new Date(claim.createdAt), 'mini-now');
			return claim;
		});

	const props = {
		claims: sortedClaims,
		loadMoreClaims,
		hasLoadedAll
	};

	return <>
		<Meta title={spaceName} />
		<Component {...props} />
	</>;
}

function mapStateToProps({ spaces, claims }, { spaceId }) {
	const currentSpace = spaces.find((space) => space.id === spaceId);
	return {
		spaceName: !currentSpace ? null : currentSpace.name,
		hasLoadedAll: !currentSpace ? false : currentSpace.hasLoadedAll,
		claims: claims.filter((claim) => claim.spaceId === spaceId)
	};
}