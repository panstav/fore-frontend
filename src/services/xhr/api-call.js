import ky from 'ky';

import localstorage from 'services/localstorage';

import { urls, localStorageKeys } from 'constants.js';

export default ['get', 'post', 'put', 'patch', 'del'].reduce((accu, method) => {
	return ({ [method]: transformApiCall(method), ...accu });
}, {});

// a function that return a function that calls ky with the method given to the first function
function transformApiCall(method) {
	// eslint-disable-next-line no-param-reassign
	if (method === 'del') method = 'delete';

	return (endpoint, data) => {

		const fetchOptions = Object.assign({ json: data, credentials: 'include' });
		return ky[method](`${urls.api}/${endpoint}`, fetchOptions).json()
			.catch((err) => {
				console.error(err);

				if (err.response?.status === 400) {
					// we might have already redirected to home, no need to do it again
					if (window.location.pathname === '/') return;
					window.location.href = urls.frontEnd;
					return;
				}

				if (err.response?.status === 401) {
					localstorage.set(localStorageKeys.redirectTo, window.location.pathname);
					window.location.href = `${urls.frontEnd}/connect?login`;
					return;
				}
			});
	};
}