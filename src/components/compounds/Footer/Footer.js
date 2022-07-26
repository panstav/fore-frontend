import { Link } from 'wouter-preact';

import Access from 'wrappers/Access';

import { Logo } from 'components/elements/Icon';

import { roles } from 'constants';

export default function Footer({ logOut }) {
	return <footer className="mt-6">
		<div className="container px-3">
			<div className="is-flex is-align-items-center mb-4">
				<Logo className="mr-3" />
				<h2 className="has-text-weight-bold">Fore</h2>
			</div>
			<div className="is-size-7 mb-3">

				<DotLink dotless={true} href="mailto:stavgeffen@gmail.com">Give feedback</DotLink>
				<DotLink href="mailto:stavgeffen@gmail.com">Report a bug</DotLink>
				<DotLink href="/privacy-policy">Privacy Policy</DotLink>

				<Access minimumRole={roles.order[1]}>
					<DotLink onClick={logOut}>Logout</DotLink>
				</Access>

			</div>
		</div>
	</footer>;
}

function DotLink({ dotless, ...props }) {

	return <span style={{ display: 'inline-block', cursor: 'default' }}>
		{ !dotless && <span style={{ padding: '0 1em' }}>·</span> }
		<Anchor {...props} />
	</span>;

	function Anchor(props) {
		if (props.onClick) return <span className="is-link" onClick={props.onClick}>{props.children}</span>;
		if (props.href.includes('mailto')) return <a {...props}>{props.children}</a>;
		return <Link {...props}>{props.children}</Link>;
	}

}