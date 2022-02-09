import classnames from 'classnames';

export default function Section({ className = '', withTopMargin, noSidePadding, children }) {
	const containerClasses = classnames('container', className, noSidePadding ? '' : 'px-3', withTopMargin ? 'mt-6' : '');
	return <div className={containerClasses}>{children}</div>;
}