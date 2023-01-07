import Access from 'wrappers/Access';

import MenuLink from 'elements/MenuLink';
import { Logo, Twitter } from 'elements/Icon';

import { roles } from 'constants';

export default function Footer({ logOut, version }) {
	return <footer className="mt-6">
		<div className="container px-3">
			<div className="is-flex is-align-items-center mb-4">
				<Logo className="mr-3" />
				<h2 className="is-flex is-align-items-baseline">
					<span className="has-text-weight-bold">Fore</span>
					{version && <span className="fore-version has-text-weight-medium is-size-7 ml-3">beta {version}</span> }
				</h2>
			</div>
			<div className="is-size-7 is-flex is-align-items-center is-flex-wrap-wrap mb-3">

				<FooterLink href="https://twitter.com/what_is_fore">
					<Twitter className="is-block fore-twitter-icon" />
				</FooterLink>
				<FooterLink href="mailto:hello@fore.is">Give feedback</FooterLink>
				<FooterLink href="mailto:hello@fore.is">Report a bug</FooterLink>

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
	return <span className='is-flex is-align-items-center' style={{ display: 'inline-block', cursor: 'default' }}>
		<MenuLink {...props} />
		{!dotless && <span style={{ padding: '0 1em' }}>·</span>}
	</span>;
}