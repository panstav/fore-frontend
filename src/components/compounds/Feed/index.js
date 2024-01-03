import { useContext } from 'preact/compat';
import { connect } from 'unistore/preact';

import timeAgo from 'lib/time-ago.js';
import { isAuthCreateClaims } from 'lib/is-auth.js';

import actions from './actions.js';

import { ModalContext } from 'contexts.js';

import Meta from 'compounds/Meta.js';

import Component from './Feed.js';

export default connect(mapStateToProps, actions)(Feed);

function Feed({ addClaim, spaceId, spaceName, canCreateClaims, claims, loadMoreClaims, hasLoadedAll, className }) {

	const { showAddClaimModal } = useContext(ModalContext);
	const createNewClaim = () => showAddClaimModal({
		onSubmit: ({ content, isAnonymous }) => addClaim({ content, isAnonymous, spaceId })
	});

	if (!spaceName) return null;

	const sortedClaims = claims
		.sort((a, b) => b.createdAt - a.createdAt)
		.map((claim) => ({
			...claim,
			createdAtTimeAgo: timeAgo.format(new Date(claim.createdAt), 'mini-now')
		}));

	const props = {
		createNewClaim,
		claims: sortedClaims,
		canCreateClaims,
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
		spaceName: currentSpace?.name,
		canCreateClaims: isAuthCreateClaims(),
		hasLoadedAll: currentSpace?.hasLoadedAll,
		claims: claims.filter((claim) => claim.spaceId === spaceId)
	};
}