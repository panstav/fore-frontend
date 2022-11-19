import Component from './SignupWithGoogle';

import { urls } from 'constants.js';

export default function SignupWithGoogle(props) {

	props.authViaGoogleUrl = `${urls.api}/auth/google`;

	return Component(props);
}