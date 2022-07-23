import classnames from 'classnames';

export default function Section({ className = '', withTopMargin, noSidePadding, children, ...props }) {
	const containerClasses = classnames('container', className, noSidePadding ? '' : 'px-3', withTopMargin ? 'mt-6' : '');
	return <div {...props} className={containerClasses}>{children}</div>;
}