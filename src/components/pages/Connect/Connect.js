import classNames from 'classnames';

import Section from 'wrappers/Section';

import SignupWithGoogle from 'components/elements/SignupWithGoogle';

export default function Connect({ connectingMethods, connectionMethod }) {
	return <>
		<Section withTopMargin={true}>
			<div className="box is-small m-auto panel is-primary">
				<h1 className="title is-size-3 has-text-centered mb-5">Connect to Fore</h1>

				<div className="has-text-centered panel-tabs">
					{connectingMethods.map(({ name, isActive, switchTo }) => {
						const classes = classNames('is-flex-grow-1', isActive ? 'is-active' : '');
						return <a key={name} className={classes} onClick={switchTo}>{name}</a>;
					})}
				</div>

				<SignupWithGoogle method={connectionMethod} fullWidth={true} className="mt-5" />
			</div>
		</Section>
		<Section withTopMargin={true}>
			<div className="box is-small m-auto panel is-primary">
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
			</div>
		</Section>
	</>;
}