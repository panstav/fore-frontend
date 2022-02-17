import StoreProvider from './Store';
import ModalProvider from './Modal';

export default function Config({ children }) {
	return <StoreProvider>
		<ModalProvider>
			{children}
		</ModalProvider>
	</StoreProvider>;
}