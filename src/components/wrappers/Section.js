import classNames from 'classnames';

export default function Section({ className = '', withTopMargin = true, withSidePadding = true, children, ...props }) {
	const containerClasses = classNames('container', withSidePadding && 'px-3', withTopMargin && 'mt-6', className);
	return <div {...props} className={containerClasses}>{children}</div>;
}