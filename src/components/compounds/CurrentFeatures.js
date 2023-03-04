import classNames from "classnames";

import { spaceMaxParticipants } from "constants";

export default function CurrentFeatures({ className: classes }) {
	const className = classNames('box mx-auto panel is-primary', classes);
	return <div {...{ className }} >
		<div className="content">
			<h2>Registered users can:</h2>
			<ul className="mx-4" style={{ lineHeight: 1.75 }}>
				<NewFeature>Create a shared Space for up to {spaceMaxParticipants} participants</NewFeature>
				<NewFeature>Create a private Space</NewFeature>
				<li>Browse recent Claims</li>
				<li>Create new Claims</li>
				<li>Support or Oppose existing Claims</li>
				<li>Power the best support / opposition of any Claim</li>
			</ul>
		</div>
	</div>;
}

function NewFeature({ children }) {
	return <li>
		{children}
		<span className="tag is-primary has-text-weight-bold is-size-8 ml-2" style={{ transform: 'translate(0px, -0.3em)' }}>NEW</span>
	</li>;
}