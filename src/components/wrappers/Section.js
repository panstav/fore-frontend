import classnames from 'classnames';

export default function Section({ className = '', withTopMargin = true, noSidePadding, children, ...props }) {
	const containerClasses = classnames('container', noSidePadding || 'px-3', withTopMargin && 'mt-6', className);
	return <div {...props} className={containerClasses}>{children}</div>;
}