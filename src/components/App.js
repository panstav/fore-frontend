import StoreProvider from 'config/Store';
import AuthProvider from 'config/Auth';

import TopNav from 'config/TopNav';
import Router from 'config/Router';
import Footer from 'config/Footer';
import Notifications from 'config/Notifications';

export default function App() {
	return <StoreProvider>
		<AuthProvider>

			<TopNav />

			<Router />

			<Footer />

			<Notifications />

		</AuthProvider>
	</StoreProvider>;
}