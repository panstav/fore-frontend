import Providers from 'config/Providers';
import TopNav from 'config/TopNav';
import Router from 'config/Router';
import Footer from 'config/Footer';
import Notifications from 'config/Notifications';

export default function App() {
	return <Providers>

		<TopNav/>

		<Router/>
		{/* eslint-disable-next-line */
		}<button onClick={methodDoesNotExist}>Break the world</button>
		<Footer/>

		<Notifications/>
	</Providers>;
}