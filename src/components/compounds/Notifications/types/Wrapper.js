import classNames from "classnames";
import { Link, useLocation } from "wouter-preact";

export default function Notification({ icon: Icon, url, createdAt, children }) {
	const Wrapper = url ? Link : 'div';
	const style = url ? {} : { cursor: 'default' };
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