import { connect } from 'unistore/preact';

import TimeAgo from 'javascript-time-ago';

import Component from './Feed.js';

const timeAgo = new TimeAgo();

export default connect(mapStateToProps)(Feed);

function Feed({ claims }) {

	const sortedClaims = claims
		.sort((a, b) => b.createdAt - a.createdAt)
		.map((claim) => {
			claim.createdAtTimeAgo = timeAgo.format(new Date(claim.createdAt), 'mini-now');
			return claim;
		});

	const props = {
		claims: sortedClaims
	};

	return Component(props);
}

function mapStateToProps({ claims }, { spaceId }) {
	return {
		claims: claims.filter((claim) => claim.spaceId === spaceId)
	};
}