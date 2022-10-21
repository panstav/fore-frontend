import { useContext } from "preact/hooks";
import { connect } from "unistore/preact";
import { Redirect, useLocation } from "wouter-preact";

import { ModalContext } from "contexts";

import useEffectUntil from "hooks/use-effect-until";

import actions from "./actions";

import Loader from "elements/Loader";

import Component from './Space.js';

export default connect(mapStateToProps, actions)(Space);

function Space({ getSpaceDetail, spaceId, isDetailed, addClaim, }) {

	useEffectUntil(() => getSpaceDetail(spaceId), [isDetailed]);

	const { showAddClaimModal } = useContext(ModalContext);
	const createNewClaim = () => showAddClaimModal({
		onSubmit: ({ content, isAnonymous }) => addClaim({ content, isAnonymous, spaceId })
	});

	// if we're here for the public feed and we're not at home - redirect to home
	const [location] = useLocation();
	if (location !== '/' && spaceId === 'public') return <Redirect to="/" replace={true} />;

	if (!isDetailed) return <Loader/>;

	const props = {
		createNewClaim,
		spaceId
	};

	return Component(props);
}

function mapStateToProps({ spaces }, { params: { spaceId: spaceIdOrSlug } }) {

	const indexOfCurrentSpace = spaces.findIndex(space => space.id === spaceIdOrSlug || space.slug === spaceIdOrSlug);
	const isDetailed = ~indexOfCurrentSpace && spaces[indexOfCurrentSpace].isDetailed;

	return {
		spaceId: spaces[indexOfCurrentSpace].id,
		isDetailed
	};
}