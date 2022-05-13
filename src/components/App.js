import Providers from 'config/Providers';
import Router from 'config/Router';
import Notifications from 'config/Notifications';

import TopNav from 'base/TopNav';
import Footer from 'base/Footer.js';

export default function App() {
	return <Providers>
		<TopNav/>
		<Router/>
		<Footer/>

		<Notifications/>
	</Providers>;
}