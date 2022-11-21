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
				<li>Give power to the best support / opposition to any Claim</li>
				<li>Rephrase existing Claims</li>
			</ul>
		</div>
	</div>;
}