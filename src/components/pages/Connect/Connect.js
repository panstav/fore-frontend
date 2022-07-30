import classNames from 'classnames';

import Section from 'wrappers/Section';

import SignupWithGoogle from 'components/elements/SignupWithGoogle';

export default function Connect({ connectingMethods, connectionMethod }) {
	return <>
		<Section withTopMargin={true}>
			<div className="box is-small is-paddingless is-shadowless m-auto">

			</div>

			<div class="box is-small m-auto panel is-primary">
				<h1 className="title is-size-3 has-text-centered mb-5">Connect to Fore</h1>

				<div class="has-text-centered panel-tabs">
					{connectingMethods.map(({ name, isActive, switchTo }) => {
						const classes = classNames('is-flex-grow-1 is-link', isActive ? 'is-active has-text-weight-bold has-text-primary-dark' : '');
						return <span className={classes} onClick={switchTo}>{name}</span>;
					})}
				</div>

				<SignupWithGoogle method={connectionMethod} fullWidth={true} className="mt-5" />
			</div>
		</Section>
	</>;
}