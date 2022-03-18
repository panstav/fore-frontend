import devtools from 'unistore/devtools';
import { Provider, createStore } from 'unistore/full/preact';

import initialState from './initial-state';

export const store = devtools(createStore(initialState));
// store.subscribe(state => console.log(state));

export default function StoreProvider({ children }) {
	return <Provider store={store}>
		<>{children}</>
	</Provider>;
}