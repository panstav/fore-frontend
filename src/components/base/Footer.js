import { Link } from 'wouter-preact';

export default function Footer() {
	return <footer className="has-text-centered is-size-7 pb-3 pt-6">
		<a href="mailto:stavgeffen@gmail.com">Report a bug</a>
		<MidDot />
		<a href="mailto:stavgeffen@gmail.com">Give feedback</a>
		<MidDot />
		<Link href="/privacy-policy">Privacy Policy</Link>
	</footer>;
}

function MidDot() {
	return <span style={{ cursor: 'default', padding: '0 1em', display: 'inline-block' }}>·</span>;
}