import { Link } from 'wouter-preact';

import Access from 'wrappers/Access';

import { Logo } from 'elements/Icon';

import { roles } from 'constants';

export default function Footer({ logOut, version }) {
	return <footer className="mt-6">
		<div className="container px-3">
			<div className="is-flex is-align-items-center mb-4">
				<Logo className="mr-3" />
				<h2 className="is-flex is-align-items-baseline">
					<span className="has-text-weight-bold">Fore</span>
					{version && <span className="fore-version has-text-weight-medium is-size-7 ml-3">alpha {version}</span> }
				</h2>
			</div>
			<div className="is-size-7 mb-3">

				<FooterLink href="mailto:stavgeffen@gmail.com">Give feedback</FooterLink>
				<FooterLink href="mailto:stavgeffen@gmail.com">Report a bug</FooterLink>

				<Access minimum={roles.order[1]} onFail={() => {
					return <FooterLink dotless={true} href="/privacy-policy">Privacy Policy</FooterLink>;
				}}>
					<FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
					<FooterLink dotless={true} onClick={logOut}>Logout</FooterLink>
				</Access>

			</div>
		</div>
	</footer>;
}

function FooterLink({ dotless, ...props }) {

	return <span style={{ display: 'inline-block', cursor: 'default' }}>
		<Anchor {...props} />
		{!dotless && <span style={{ padding: '0 1em' }}>·</span>}
	</span>;

	function Anchor(props) {
		if (props.onClick) return <span className="is-link" onClick={props.onClick}>{props.children}</span>;
		if (props.href.includes('mailto')) return <a {...props}>{props.children}</a>;
		return <Link {...props}>{props.children}</Link>;
	}

}