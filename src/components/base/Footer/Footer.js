import { Link } from 'wouter-preact';

import Access from 'wrappers/Access';

import { Logo } from 'base/Icon';

import { roles } from 'constants';

export default function Footer({ logOut }) {
	return <footer className="pt-6 px-5 pb-3">
		<div className="is-flex is-align-items-center mb-4">
			<Logo className="mr-3" />
			<h2 className="has-text-weight-bold">Fore</h2>
		</div>
		<div className="is-size-7">

			<DotLink dotless={true} href="mailto:stavgeffen@gmail.com">Give feedback</DotLink>
			<DotLink href="mailto:stavgeffen@gmail.com">Report a bug</DotLink>
			<DotLink href="/privacy-policy">Privacy Policy</DotLink>

			<Access minimumRole={roles.MEMBER}>
				<DotLink onClick={logOut}>Logout</DotLink>
			</Access>

		</div>
	</footer>;
}

function DotLink({ dotless, ...props }) {

	return <span style={{ display: 'inline-block', cursor: 'default' }}>
		{ !dotless && <span style={{ padding: '0 1em' }}>·</span> }
		<Anchor {...props} />
	</span>;

	function Anchor(props) {
		if (props.onClick) return <span style={{ cursor: 'pointer' }}onClick={props.onClick}>{props.children}</span>;
		if (props.href.includes('mailto')) return <a {...props}>{props.children}</a>;
		return <Link {...props}>{props.children}</Link>;
	}

}