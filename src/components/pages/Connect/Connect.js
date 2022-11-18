import classNames from 'classnames';

import Section from 'wrappers/Section';

import CurrentFeatures from 'compounds/CurrentFeatures';

import SignupWithGoogle from 'elements/SignupWithGoogle';

import LoggedIn from './LoggedIn';

export default function Connect({ isLoggedIn, ...props }) {
	return <>
		<Section>
			<h1 className="title is-size-2 has-text-centered pt-4 mb-6 has-text-primary">Fore</h1>
			<div className="box is-small m-auto panel is-primary pt-2">
				{isLoggedIn
					? <LoggedIn />
					: <ConnectMethods {...props} />}
			</div>
		</Section>

		<Section>
			<CurrentFeatures />
		</Section>
	</>;
}

function ConnectMethods({ connectingMethods, connectionMethod }) {
	return <>
		<div className="has-text-centered panel-tabs">
			{connectingMethods.map(({ name, isActive, switchTo }) => {
				const classes = classNames('is-flex-grow-1', isActive ? 'is-active' : '');
				return <a key={name} className={classes} onClick={switchTo}>{name}</a>;
			})}
		</div>

		<SignupWithGoogle method={connectionMethod} fullWidth={true} className="mt-5" />
	</>;
}