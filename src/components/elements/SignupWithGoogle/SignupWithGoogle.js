import classNames from "classnames";

import { Google } from "elements/Icon";

export default function SignupWithGoogle({ authViaGoogleUrl, fullWidth, method, className }) {

	const classes = classNames(
		'button is-outlined px-3',
		fullWidth ? 'is-block is-flex is-align-items-center is-justify-content-center' : '',
		className
	);

	return <a className={classes} href={authViaGoogleUrl}>
		<Google className={fullWidth ? '' : 'm-auto'} />
		<span className="ml-3">{method} with Google</span>
	</a>;
}