import classNames from 'classnames';

import Section from 'wrappers/Section';

import CurrentFeatures from 'compounds/CurrentFeatures';

import { Logo } from 'elements/Icon';
import SignupWithGoogle from 'elements/SignupWithGoogle';

import LoggedIn from './LoggedIn';
import Invitation from './Invitation';

export default function Connect({ isLoggedIn, ...props }) {
	return <Section withTopMargin={false} className='is-small'>

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

	</Section>;
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

		<Invitation className="mt-5" />
	</>;
}