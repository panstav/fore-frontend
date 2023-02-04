import { connect } from "unistore/preact";
import { Redirect, useLocation } from "wouter-preact";

import useEffectUntil from "hooks/use-effect-until";

import actions from "./actions";

import Loader from "elements/Loader";

import Component from './SpaceDetail.js';

export default connect(mapStateToProps, actions)(Space);

function Space({ getSpaceDetail, id, name, type, participants, isDetailed }) {

	// if we're here for the public feed and we're not at home - redirect to home
	const [location] = useLocation();
	if (location !== '/' && id === 'public') return <Redirect to="/" replace={true} />;

	useEffectUntil(() => getSpaceDetail(id), [isDetailed]);

	if (!isDetailed) return <Loader/>;

	const spaceName = id === 'public' ? 'Fore · Public' : name;

	const props = {
		id,
		name: spaceName,
		type,
		participants
	};

	return Component(props);
}

function mapStateToProps({ spaces }, { params: { spaceId: spaceIdOrSlug } }) {
	const indexOfCurrentSpace = spaces.findIndex(space => space.id === spaceIdOrSlug || space.slug === spaceIdOrSlug);
	const { id, type, name, participants, isDetailed } = spaces[indexOfCurrentSpace] || {};

	return {
		id,
		name,
		type,
		participants,
		isDetailed
	};
}