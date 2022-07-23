import classnames from "classnames"

import { Google } from "elements/Icon";

export default function SignupWithGoogle({ authViaGoogleUrl, className }) {
	const classNames = classnames('button is-outlined px-3', className);
	return <a className={classNames} href={authViaGoogleUrl}>
		<Google className="m-auto" />
		<span className="ml-3">Sign in with Google</span>
	</a>
}