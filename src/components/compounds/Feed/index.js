import { useContext } from 'preact/compat';
import { connect } from 'unistore/preact';

import TimeAgo from 'javascript-time-ago';

import actions from './actions.js';

import { ModalContext } from 'contexts.js';

import Meta from 'compounds/Meta.js';

import Component from './Feed.js';

const timeAgo = new TimeAgo();

export default connect(mapStateToProps, actions)(Feed);

function Feed({ addClaim, spaceId, spaceName, claims, loadMoreClaims, hasLoadedAll, className }) {

	const { showAddClaimModal } = useContext(ModalContext);
	const createNewClaim = () => showAddClaimModal({
		onSubmit: ({ content, isAnonymous }) => addClaim({ content, isAnonymous, spaceId })
	});

	if (!spaceName) return null;

	const sortedClaims = claims
		.sort((a, b) => b.createdAt - a.createdAt)
		.map((claim) => {
			claim.createdAtTimeAgo = timeAgo.format(new Date(claim.createdAt), 'mini-now');
			return claim;
		});

	const props = {
		createNewClaim,
		claims: sortedClaims,
		loadMoreClaims,
		hasLoadedAll,
		className
	};

	return <>
		<Meta title={spaceName} />
		<Component {...props} />
	</>;
}

function mapStateToProps({ spaces, claims }, { spaceId }) {
	const currentSpace = spaces.find((space) => space.id === spaceId);
	return {
		spaceId,
		spaceName: !currentSpace ? null : currentSpace.name,
		hasLoadedAll: !currentSpace ? false : currentSpace.hasLoadedAll,
		claims: claims.filter((claim) => claim.spaceId === spaceId)
	};
}