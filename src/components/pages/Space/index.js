import { connect } from "unistore/preact";
import { Redirect, useLocation } from "wouter-preact";

import Feed from "compounds/Feed";

import actions from "./actions";

export default connect(mapStateToProps, actions)(Space);

function Space({ setCurrentSpace, spaceId }) {
	const [location] = useLocation();

	setCurrentSpace(spaceId);

	// if we're not at home and redirect to home to show the feed
	if (location !== '/' && spaceId === 'public') return <Redirect to="/" replace={true} />;

	// otherwise show the feed of the space
	return <Feed {...{spaceId}} />;
}

function mapStateToProps(state, { params: { spaceId } }) {
	return { spaceId };
}