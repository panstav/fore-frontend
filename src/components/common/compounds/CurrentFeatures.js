export default function CurrentFeatures() {
	return <div className="box is-small m-auto panel is-primary">
		<div className="content">
			<h2>At the moment</h2>
			<h3 className="is-size-6">Registered users can:</h3>
			<ul>
				<li>Support the Closed Beta by submitting Claims</li>
				<li>Signup for updates</li>
			</ul>
			<h3 className="is-size-6">Closed Beta users can also:</h3>
			<ul>
				<li>Browse existing Claims</li>
				<li>Submit a Claim in support or opposition to existing claims</li>
				<li>Vote for the best support / opposition of a Claim</li>
			</ul>
		</div>
	</div>;
}