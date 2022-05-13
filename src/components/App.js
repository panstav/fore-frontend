import Providers from 'config/Providers';
import Router from 'config/Router';
import Notifications from 'config/Notifications';

import TopNav from 'base/TopNav';

export default function App() {
	return <Providers>
		<TopNav/>
		<Router/>
		<Notifications/>
	</Providers>;
}