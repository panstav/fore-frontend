import Providers from 'config/Providers';
import Router from 'config/Router';
import Notifications from 'config/Notifications';

import TopNav from 'compounds/TopNav';
import Footer from 'compounds/Footer';

export default function App() {
	return <Providers>
		<TopNav/>
		<Router/>
		<Footer/>

		<Notifications/>
	</Providers>;
}