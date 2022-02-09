import Router from 'config/Router';
import Notifications from 'config/Notifications';

import TopNav from 'base/TopNav';

export default function App() {
	return <>
		<TopNav/>
		<Router/>
		<Notifications/>
	</>;
}