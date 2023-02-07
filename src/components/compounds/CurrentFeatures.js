import classNames from "classnames";

export default function CurrentFeatures({ className: classes }) {
	const className = classNames('box is-small mx-auto panel is-primary', classes);
	return <div {...{ className }} >
		<div className="content">
			<h2>At the moment</h2>
			<h3 className="is-size-6">Registered users can:</h3>
			<ul>
				<li>Browse recent Claims</li>
				<li>Support or Oppose to existing Claims</li>
				<li>Power to the best support / opposition of any Claim</li>
				<li>Create new Claims</li>
				<NewFeature>Create a private Space</NewFeature>
				<NewFeature>Create a shared Space for up to 12 participants</NewFeature>
			</ul>
		</div>
	</div>;
}

function NewFeature({ children }) {
	return <li>
		<div className="is-flex is-justify-content-space-between is-align-items-center">
			{children}
			<New />
		</div>
	</li>;
}

function New() {
	return <span className="tag is-primary is-size-8 ml-2">NEW</span>;
}