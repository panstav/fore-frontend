import Component from './Login';

import { urls } from 'constants';

export default function Login() {

	const props = {
		authViaGoogleUrl: `${urls.api}/auth/google`
	};

	return Component(props);
}