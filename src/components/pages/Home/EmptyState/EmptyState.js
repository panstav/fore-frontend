import Section from "wrappers/Section";

import { FirstSpace } from "elements/Icon";

export default function EmptyState({ firstName, createSpace }) {
	return <Section>
		<div className="content">
			<h1 className="mb-6">Hey, {firstName}! 👋</h1>
			<div onClick={createSpace} className="box is-clickable" style={{ border: '2px solid var(--color-primary)' }}>
				<div className="columns is-align-items-center">
					<div className="column">
						<FirstSpace className="px-5" />
					</div>
					<div className="column">
						<div className="is-size-2 has-text-centered">Create a Space</div>
						<div className="has-text-centered">Where Claims will be considered by your group</div>
					</div>
				</div>
			</div>
			<div className="is-shadowless is-paddingless has-text-centered">
				<span className="has-text-weight-bold">To join a Space:</span> Enter the URL that was shared with you in the address bar of your browser.
			</div>
		</div>
	</Section>;
}