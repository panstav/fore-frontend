import Section from "components/common/wrappers/Section";

import Feed from "compounds/Feed";

export default function Space({ spaceId }) {
	return <>

		<Section withTopMargin={true}>
			<h1 className="title">Recent</h1>
		</Section>

		<Feed {...{ spaceId }} />

	</>;
}