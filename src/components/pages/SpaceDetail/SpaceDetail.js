import Section from "wrappers/Section";

import Feed from "compounds/Feed";
import SignupForUpdates from "compounds/SignupForUpdates";

export default function Space({ spaceId, spaceName }) {
	return <>

		<Section withTopMargin={true}>
			<h1 className="title has-text-centered">{spaceName}</h1>
		</Section>

		<Section withTopMargin={false} withSidePadding={false} className="is-flex-desktop is-justify-content-center">

			<Feed {...{ spaceId }} className="mx-auto" />

			{spaceId === 'public' && <Section className="is-flex-shrink-1 is-limited">
				<div className="box">
					<SignupForUpdates />
				</div>
			</Section>}

		</Section>

	</>;
}