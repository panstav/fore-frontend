import { Bell } from 'elements/Icon';

import NotificationsFeed from 'compounds/Notifications';

export default function Notifications({ toggleNotificationsMenu, notifications }) {
	return <>
		<span onClick={toggleNotificationsMenu} className="navbar-link has-text-weight-bold is-arrowless">
			<Bell />
		</span>
		<div className="navbar-dropdown is-right is-paddingless" style={{ width: '46ch' }}>
			<h3 className='is-size-7 has-text-weight-bold p-3'>NOTIFICATIONS</h3>
			<NotificationsFeed notifications={notifications} withViewAllButton={true} />
		</div>
	</>;
}