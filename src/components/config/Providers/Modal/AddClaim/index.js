import { connect } from "unistore/preact";

import { spaceTypes } from "constants.js";

import Template from "./AddClaim.js";

const Component = connect(mapStateToProps)(AddClaim);

// export a simple function instead of a connect() invocation
export default function AddClaimRender({ copiedContent }) {
	return <Component copiedContent={copiedContent} />;
}

function AddClaim({ isPrivateSpace, copiedContent }) {

	const props = {
		copiedContent,
		isAnonymousAvailable: !isPrivateSpace,
		isDisplayingGuidelines: !isPrivateSpace
	};

	return Template(props);

}

function mapStateToProps({ spaces }) {
	const spaceType = spaces.find(space => space.isCurrent)?.type;

	return {
		isPrivateSpace: spaceType === spaceTypes.PRIVATE
	};
}