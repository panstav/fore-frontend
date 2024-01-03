import { connect } from "unistore/preact";
import { Redirect, useLocation } from "wouter-preact";

import pick from "lodash.pick";

import useEffectUntil from "hooks/use-effect-until";

import { SpaceDetailContext } from 'contexts';

import actions from "./actions";

import Loader from "elements/Loader";

import Component from './SpaceDetail.js';

import { spaceTypes } from "constants";

export default connect(mapStateToProps, actions)(Space);

function Space({ getSpaceDetail, id, name, type, participants, isDetailed, settings }) {

	// if we're here for the public feed and we're not at home - redirect to home
	const [location] = useLocation();
	if (location !== '/' && id === 'public') return <Redirect to="/" replace={true} />;

	useEffectUntil(() => getSpaceDetail(id), [isDetailed]);

	if (!isDetailed) return <Loader/>;

	const spaceName = id === 'public' ? 'Fore · Public' : name;

	const contextProps = {
		id,
		name: spaceName,
		type,
		participants,
		settings
	};

	const isPublicSpace = id === 'public';
	const isShowingMembersSection = [spaceTypes.SHARED, spaceTypes.DEBATE].includes(type) && !isPublicSpace;

	const props = {
		id,
		name: spaceName,
		isPublicSpace,
		isShowingMembersSection,
		participants
	};

	return <SpaceDetailContext.Provider value={contextProps}>
		<Component {...props} />
	</SpaceDetailContext.Provider>;
}

function mapStateToProps({ spaces }, { params: { spaceId: spaceIdOrSlug } }) {
	const indexOfCurrentSpace = spaces.findIndex(space => space.id === spaceIdOrSlug || space.slug === spaceIdOrSlug);
	return pick(spaces[indexOfCurrentSpace], ['id', 'name', 'type', 'participants', 'isDetailed', 'settings']);
}