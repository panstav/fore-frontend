import devtools from 'unistore/devtools';
import { Provider, createStore } from 'unistore/full/preact';

import initialState from './initial-state';

import { isDevelopment } from 'constants';

export const store = devtools(createStore(initialState));

if (isDevelopment) ensureImmutability(store);

// store.subscribe(state => {
// 	// debugger;
// 	console.log(state);
// });

export default function StoreProvider({ children }) {
	return <Provider store={store}>
		<>{children}</>
	</Provider>;
}

function ensureImmutability (store) {
	store.subscribe(state => deepFreeze(state));

	function deepFreeze(obj) {
		// Retrieve the property names defined on object
		const propNames = Reflect.ownKeys(obj);

		// Freeze properties before freezing self
		for (const name of propNames) {
			const value = obj[name];

			if ((value && typeof value === "object") || typeof value === "function") {
				deepFreeze(value);
			}
		}

		return Object.freeze(obj);
	}

}
