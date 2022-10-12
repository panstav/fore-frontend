import StoreProvider from './Store';
import AuthProvider from './Auth';
import ModalProvider from './Modal';

export default function Providers({ children }) {
	return <StoreProvider>
		<AuthProvider>
			<ModalProvider>
				{children}
			</ModalProvider>
		</AuthProvider>
	</StoreProvider>;
}