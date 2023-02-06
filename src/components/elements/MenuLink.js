import { Link } from "wouter-preact";

export default function MenuLink({ href, children, ...props }) {

	if (href && isOutbound(href)) {
		props.target = '_blank';
		props.rel = 'noopener noreferrer';
	}

	if (props.onClick) return <a {...props}>{children}</a>;

	if (href && isOutbound(href)) return <a {...props} href={href}>{children}</a>;

	return <Link to={href} {...props}>{children}</Link>;
}

function isOutbound(href) {
	return (href.includes('://') && !href.startsWith('https://fore.is')) || href.startsWith('mailto:');
}