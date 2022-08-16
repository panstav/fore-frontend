import ky from 'ky';

import localDB from 'services/localstorage';

import { urls } from 'constants.js';

export default ['get', 'post', 'put', 'patch'].reduce((accu, method) => {
	return ({ [method]: transformApiCall(method), ...accu });
}, {});

// a function that return a function that calls ky with the method given to the first function
function transformApiCall(method) {
	return (endpoint, data) => {

		const fetchOptions = Object.assign({ json: data, credentials: 'include' });
		return ky[method](`${urls.api}/${endpoint}`, fetchOptions).json()
			.catch((err) => {

				if (err.response.status === 400) {
					localDB.set({ redirectTo: window.location.pathname });
					window.location.href = `${urls.frontEnd}/connect?login`;
					return;
				}

				console.error(err);
			});
	};
}