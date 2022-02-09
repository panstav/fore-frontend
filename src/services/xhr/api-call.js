import ky from 'ky';

import { urls } from 'constants.js';

export default ['get', 'post', 'update'].reduce((accu, method) => {
	return ({ [method]: transformApiCall(method), ...accu });
}, {});

// a function that return a function that calls ky with the method given to the first function
function transformApiCall(method) {
	return (endpoint, data) => ky[method](`${urls.api}/${endpoint}`, { json: data }).json()
		.catch((err) => {
			debugger;
		});
}