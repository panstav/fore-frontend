import { connect } from "unistore/preact";
import pick from "lodash.pick";

import { spaceTypes } from "constants";

import useEffectUntil from "hooks/use-effect-until";

import Loader from "elements/Loader";

import actions from "./actions";
import Component from './SpaceDetail.js';

export default connect(mapStateToProps, actions)(Space);

function Space({ getSpaceDetail, id, name, type, participants, isDetailed }) {

	useEffectUntil(() => getSpaceDetail(id), [isDetailed]);

	if (!isDetailed) return <Loader/>;

	const spaceName = id === 'public' ? 'Fore · Public' : name;

	const isPublicSpace = id === 'public';
	const isShowingMembersSection = [spaceTypes.SHARED, spaceTypes.DEBATE].includes(type) && !isPublicSpace;

	const props = {
		spaceId: id,
		spaceName,
		spaceType: type,
		participants,
		isPublicSpace,
		isShowingMembersSection
	};

	return Component(props);
}

function mapStateToProps({ spaces }, { params: { spaceId: spaceIdOrSlug } }) {
	const indexOfCurrentSpace = spaces.findIndex(space => space.id === spaceIdOrSlug || space.slug === spaceIdOrSlug);
	return pick(spaces[indexOfCurrentSpace], ['id', 'name', 'type', 'participants', 'isDetailed', 'settings']);
}