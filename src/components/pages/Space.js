import { connect } from "unistore/preact";

import Feed from "compounds/Feed";
import { Redirect } from "wouter-preact";

export default connect(mapStateToProps)(Space);

function Space({ spaceId }) {
	if (spaceId === 'public') return <Redirect to="/" replace={true} />;
	return <Feed {...{spaceId}} />;
}

function mapStateToProps(state, { params: { spaceId } }) {
	return { spaceId };
}