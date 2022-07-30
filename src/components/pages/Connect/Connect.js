import classNames from 'classnames';

import Section from 'wrappers/Section';

import CurrentFeatures from 'compounds/CurrentFeatures';

import { Logo } from 'elements/Icon';
import SignupWithGoogle from 'elements/SignupWithGoogle';

import LoggedIn from './LoggedIn';

export default function Connect({ isLoggedIn, onSubmit, ...props }) {
	return <>
		<Section withTopMargin={false} className='is-small'>
			<div className="is-flex is-align-items-center mt-4 mb-6 pb-6">
				<Logo className="has-text-primary mr-2" style={{ width: '2.75rem' }} />
				<h1 className="title is-size-3 has-text-primary">Fore</h1>
			</div>
			<div className="box m-auto panel is-primary mt-6 pt-2">
				{isLoggedIn
					? <LoggedIn />
					: <ConnectMethods {...props} />}
			</div>
			<CurrentFeatures className="mt-6" />
		</Section>
	</>;
}

function SignupWithEmail({ connectionMethod, onSubmit, registerInput }) {
	return <div className="mt-5">
		<form {...{ onSubmit }}>
			<div className="field mb-4">
				<label htmlFor="emailAddress" className="label has-text-weight-normal">Email address:</label>
				<input {...registerInput('email')} className="input is-outlined" type="email" name="emailAddress" />
			</div>
			<div className="field mb-4">
				<label htmlFor="password" className="label has-text-weight-normal">Password:</label>
				<input {...registerInput('password')} className="input is-outlined" type="password" name="password" />
			</div>
			<div className="has-text-right">
				<button className="button is-primary is-fullwidth is-justify-content-center">{connectionMethod}</button>
			</div>
		</form>
	</div>;
}

function ConnectMethods({ connectingMethods, connectionMethod, ...emailPasswordProps }) {
	return <>
		<div className="has-text-centered panel-tabs">
			{connectingMethods.map(({ name, isActive, switchTo }) => {
				const classes = classNames('is-flex-grow-1', isActive ? 'is-active' : '');
				return <a key={name} className={classes} onClick={switchTo}>{name}</a>;
			})}
		</div>

		<SignupWithEmail {...{ connectionMethod, ...emailPasswordProps}} />

		<EitherOrSeparator />

		<SignupWithGoogle method={connectionMethod} fullWidth={true} className="mt-5" />
	</>;
}

function EitherOrSeparator({ backgroundColor = 'white' }) {
	return <div className="is-relative" style={{ margin: '2.5rem 0' }}>
		<hr />
		<div className="is-overlay has-text-centered is-size-7" style={{ marginTop: '-0.6em' }}>
			<span className="px-3 has-text-grey-light" style={{ backgroundColor }}>OR</span>
		</div>
	</div>;
}