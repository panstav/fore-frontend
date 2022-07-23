import Component from './SignupWithGoogle';

import { urls } from 'constants.js';

export default function SignupWithGoogle({ className }) {

	const props = {
		authViaGoogleUrl: `${urls.api}/auth/google`,
		className
	};

	return Component(props);
}