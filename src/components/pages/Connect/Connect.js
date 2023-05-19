import classNames from 'classnames';

import Section from 'wrappers/Section';

import CurrentFeatures from 'compounds/CurrentFeatures';

import { Logo } from 'elements/Icon';
import SignupWithGoogle from 'elements/SignupWithGoogle';

import LoggedIn from './LoggedIn';
import Invitation from './Invitation';

export default function Connect({ isLoggedIn, ...props }) {
	return <Section withTopMargin={false} className='is-small mt-6 pt-6'>

		<div className="box m-auto panel is-primary mt-6 pt-2">
			<Logo className="icon is-block has-text-primary mx-auto mr-2 pt-5 pb-2" style={{ width: '2.75rem', height: 'auto' }} />
			{isLoggedIn
				? <LoggedIn />
				: <ConnectMethods {...props} />}
		</div>

		<CurrentFeatures className="is-small mt-6" />

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