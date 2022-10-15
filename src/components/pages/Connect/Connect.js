import classNames from 'classnames';

import Section from 'wrappers/Section';

import CurrentFeatures from 'compounds/CurrentFeatures';

import SignupWithGoogle from 'elements/SignupWithGoogle';

export default function Connect({ connectingMethods, connectionMethod }) {
	return <>
		<Section>
			<div className="box is-small m-auto panel is-primary">
				<h1 className="title is-size-3 has-text-centered my-3">Fore</h1>

				<div className="has-text-centered panel-tabs">
					{connectingMethods.map(({ name, isActive, switchTo }) => {
						const classes = classNames('is-flex-grow-1', isActive ? 'is-active' : '');
						return <a key={name} className={classes} onClick={switchTo}>{name}</a>;
					})}
				</div>

				<SignupWithGoogle method={connectionMethod} fullWidth={true} className="mt-5" />
			</div>
		</Section>
		<Section>
			<CurrentFeatures />
		</Section>
	</>;
}