import Providers from 'config/Providers';
import TopNav from 'config/TopNav';
import Router from 'config/Router';
import Footer from 'config/Footer';
import Notifications from 'config/Notifications';
import Maintenance from 'config/Maintenance';

import { maintenanceMode, localToCloudDev } from 'constants';

export default function App() {
	if (maintenanceMode) return <Maintenance/>;

	return <Providers>

		{localToCloudDev && <LocalToCloudDevNotice/>}

		<TopNav/>

		<Router/>

		<Footer/>

		<Notifications/>
	</Providers>;
}

function LocalToCloudDevNotice() {
	return <div className='is-flex is-justify-content-center is-align-items-center has-text-danger mx-auto mb-6' style={{ position: 'fixed', bottom: '1rem', left: 0, right: 0, zIndex: '100000000' }}>
		Remember to switch to non-localhost when you&apos;re done.
	</div>;
}