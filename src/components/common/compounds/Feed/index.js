import { connect } from 'unistore/preact';

import TimeAgo from 'javascript-time-ago';

import Meta from 'compounds/Meta.js';

import Component from './Feed.js';

const timeAgo = new TimeAgo();

export default connect(mapStateToProps)(Feed);

function Feed({ spaceName, claims }) {

	const sortedClaims = claims
		.sort((a, b) => b.createdAt - a.createdAt)
		.map((claim) => {
			claim.createdAtTimeAgo = timeAgo.format(new Date(claim.createdAt), 'mini-now');
			return claim;
		});

	const props = {
		claims: sortedClaims
	};

	return <>
		<Meta title={spaceName} />
		<Component {...props} />
	</>;
}

function mapStateToProps({ spaces, claims }, { spaceId }) {
	const currentSpace = spaces.find((space) => space.id === spaceId);
	return {
		spaceName: currentSpace.name,
		claims: claims.filter((claim) => claim.spaceId === spaceId)
	};
}