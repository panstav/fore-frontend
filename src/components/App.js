import Providers from 'config/Providers';
import TopNav from 'config/TopNav';
import Router from 'config/Router';
import Footer from 'config/Footer';
import Notifications from 'config/Notifications';
import Maintenance from 'config/Maintenance';

import { maintenanceMode } from 'constants';

export default function App() {
	if (maintenanceMode) return <Maintenance/>;
	return <Providers>

		<TopNav/>

		<Router/>

		<Footer/>

		<Notifications/>
	</Providers>;
}