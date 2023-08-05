import Component from './SignupWithGoogle';

import { urls } from 'constants.js';

export default function SignupWithGoogle(props) {

	// eslint-disable-next-line no-param-reassign
	props.authViaGoogleUrl = `${urls.api}/auth/google`;

	return Component(props);
}