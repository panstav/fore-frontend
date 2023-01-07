import { connect } from "unistore/preact";
import { Redirect, useLocation } from "wouter-preact";

import useEffectUntil from "hooks/use-effect-until";

import actions from "./actions";

import Loader from "elements/Loader";

import Component from './SpaceDetail.js';

export default connect(mapStateToProps, actions)(Space);

function Space({ getSpaceDetail, spaceId, isDetailed, isSetAsCurrent, setCurrentSpace, name }) {

	// if we're here for the public feed and we're not at home - redirect to home
	const [location] = useLocation();
	if (location !== '/' && spaceId === 'public') return <Redirect to="/" replace={true} />;

	// inform the app that we're in this space even if we already have the data
	if (isDetailed && !isSetAsCurrent) setCurrentSpace(spaceId);

	useEffectUntil(() => getSpaceDetail(spaceId), [isDetailed]);

	if (!isDetailed) return <Loader/>;

	const spaceName = spaceId === 'public' ? 'Fore · Public' : name;

	const props = {
		spaceId,
		spaceName
	};

	return Component(props);
}

function mapStateToProps({ spaces }, { params: { spaceId: spaceIdOrSlug } }) {

	const indexOfCurrentSpace = spaces.findIndex(space => space.id === spaceIdOrSlug || space.slug === spaceIdOrSlug);
	const { id: spaceId, isDetailed, name } = spaces[indexOfCurrentSpace] || {};
	const isSetAsCurrent = spaces[indexOfCurrentSpace].isCurrent;

	return {
		spaceId,
		isDetailed,
		isSetAsCurrent,
		name
	};
}