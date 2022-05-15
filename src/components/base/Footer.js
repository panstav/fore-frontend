import { Link } from 'wouter-preact';

import { Logo } from 'base/Icon';

export default function Footer() {
	return <footer className="pt-6 px-5 pb-3">
		<div className="is-flex is-align-items-center mb-4">
			<Logo className="mr-3" />
			<h2 className="has-text-weight-bold">Fore</h2>
		</div>
		<div className="is-size-7">
			<DotLink dotless={true} href="mailto:stavgeffen@gmail.com">Give feedback</DotLink>
			<DotLink href="mailto:stavgeffen@gmail.com">Report a bug</DotLink>
			<DotLink href="/privacy-policy">Privacy Policy</DotLink>
		</div>
	</footer>;
}

function DotLink({ dotless, href, children }) {
	return <span style={{ display: 'inline-block', cursor: 'default' }}>
		{ !dotless && <span style={{ padding: '0 1em' }}>·</span> }
		<a href={href}>{children}</a>
	</span>;
}