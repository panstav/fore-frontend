import { useEffect, useState } from "preact/hooks";

import randomSpaceName from "lib/random-space-name";

import Section from "wrappers/Section";

import { FirstSpace } from "elements/Icon";

export default function EmptyState({ firstName, createSpace }) {
	const spaceName = useRandomSpaceName();
	return <Section>
		<div className="content">
			<h1 className="mb-6">Hey, {firstName}! 👋</h1>
			<div onClick={createSpace} className="box is-clickable" style={{ border: '2px solid var(--color-primary)' }}>
				<div className="columns is-align-items-center">
					<div className="column">
						<FirstSpace className="is-block mx-auto px-5" svgProps={{ style: { width: '80%' } }} />
					</div>
					<div className="column">
						<div className="is-size-2 has-text-centered">Create a Space</div>
						<div className="has-text-centered has-text-grey">{spaceName}</div>
					</div>
				</div>
			</div>
			<div className="is-shadowless is-paddingless has-text-centered">
				<span className="has-text-weight-bold">To join a Space:</span> Enter the URL you received to the address bar of your browser.
			</div>
		</div>
	</Section>;
}

function useRandomSpaceName() {
	const [spaceName, setSpaceName] = useState(randomSpaceName());

	useEffect(() => {
		const interval = setInterval(() => setSpaceName(randomSpaceName()), 3000);
		return () => clearInterval(interval);
	}, []);

	return spaceName;
}