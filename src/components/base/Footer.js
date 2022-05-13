import { Link } from 'wouter-preact';

export default function Footer() {
	return <footer className="has-text-centered mt-6 mb-3 is-size-7">
		<Link href="mailto:stavgeffen@gmail.com">Report a bug</Link>
		<MidDot/>
		<Link href="mailto:stavgeffen@gmail.com">Give feedback</Link>
		<MidDot/>
		<Link href="/privacy-policy">Privacy Policy</Link>
	</footer>;
}

function MidDot() {
	return <span style={{ cursor: 'default', padding: '0 1em', display: 'inline-block' }}>·</span>;
}