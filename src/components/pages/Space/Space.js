import Section from "components/common/wrappers/Section";

import Feed from "compounds/Feed";

export default function Space({ createNewClaim, spaceId }) {
	return <>

		<Section withTopMargin={true}>
			<h1 className="title">Recent</h1>
			<button onClick={createNewClaim} className="button is-primary">Create a Claim</button>
		</Section>

		<Feed {...{ spaceId }} />

	</>;
}