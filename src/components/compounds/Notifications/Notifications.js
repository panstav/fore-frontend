import { createContext } from "preact";
import { Link } from "wouter-preact";

import classNames from "classnames";

import { Cat } from "elements/Icon";
import BoxLink from 'elements/BoxLink';

import * as types from './types';

export const NotificationContext = createContext();

export default function Notifications({ notifications, withViewAllButton, hasLoadedAll, loadMoreNotifications }) {
	// display notifications without borderradius when we're on a page that can load additional notifications
	const className = classNames('box is-align-items-top is-paddingless reset-anchors', withViewAllButton && 'is-radiusless');
	return <div className="boxes">
		{!notifications.length ? <EmptyState /> : <>
			{notifications.map(({ type, payload, notificationId }) => {
				const Component = types[type];
				return <div key={notificationId} className={className}>
					<NotificationContext.Provider value={payload}>
						<Component {...payload} />
					</NotificationContext.Provider>
				</div>;
			})}
			{withViewAllButton && <Link to="/notifications"><a>
				<BoxLink>View all notifications</BoxLink>
			</a></Link>}
			{!withViewAllButton && !hasLoadedAll && <BoxLink onClick={loadMoreNotifications}>Load more</BoxLink>}
		</>}
	</div>;
}

function EmptyState() {
	return <div className='my-3'>
		<div className="has-text-centered mb-2">Nothing here, yet..</div>
		<Cat className="my-2" svgProps={{ style: { opacity: 0.2 } }} />
	</div>;
}