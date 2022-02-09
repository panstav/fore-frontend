import StoreProvider from './Store';

export default function Config({ children }) {
	return <StoreProvider>
		{children}
	</StoreProvider>;
}