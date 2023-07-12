import { memo, useContext } from "preact/compat";
import { Link, useLocation } from "wouter-preact";

import classNames from "classnames";

import timeAgo from "lib/time-ago";

import { NotificationContext } from "../Notifications";

// use a memoized component to prevent re-rendering of notifications that haven't changed
// otherwise every additional notification would cause all notifications to re-render
export default memo(Notification, (prevProps, nextProps) => {
	return prevProps.notificationId === nextProps.notificationId;
});

function Notification({ icon: Icon, url, children }) {
	const { createdAt: timestamp } = useContext(NotificationContext);

	const Wrapper = url ? Link : 'div';
	const style = url ? {} : { cursor: 'default' };
	const createdAt = timeAgo.format(new Date(timestamp), 'mini-now');

	return <Wrapper to={url} className="is-flex is-justify-content-space-between is-align-items-start p-2" style={style}>
		<div className="is-flex is-align-items-start">
			<Icon className="is-flex-shrink-0 ml-1 mr-3" style={{ width: '1.5rem' }} />
			<Content>{children}</Content>
		</div>
		<span className="icon-text has-text-grey-light mr-1">{createdAt}</span>
	</Wrapper>;
}

function Content({ children }) {
	const [location] = useLocation();
	const className = classNames('icon-text is-inline-block', location !== '/notifications' && 'is-size-7');
	return <p className={className}>
		{children}
	</p>;
}