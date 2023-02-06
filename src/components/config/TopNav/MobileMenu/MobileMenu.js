import classNames from "classnames";

import MenuLink from "elements/MenuLink";
import { Twitter } from "elements/Icon";
import Greeting from "elements/Greeting";

import { meta } from "constants";

export default function MobileMenu({ userFirstName, logOut, className: classes }) {
	const className = classNames('menu px-2', classes);
	return <div {...{ className }}>
		<p className="menu-label mb-1">
			{userFirstName ? <Greeting userName={userFirstName} /> : 'Fore'}
		</p>
		<ul className="menu-list">
			<MenuLink href="https://twitter.com/what_is_fore">
				<span className="is-flex is-align-items-center">
					Find us on <Twitter className="is-inline-block fore-twitter-icon ml-2" />
				</span>
			</MenuLink>
			<MenuLink href={`mailto:${meta.contactEmailAddress}`} target="_blank">Give feedback</MenuLink>
			<MenuLink href={`mailto:${meta.contactEmailAddress}`} target="_blank">Report a bug</MenuLink>
			<MenuLink href="/privacy-policy">Privacy Policy</MenuLink>

			{!!userFirstName
				? <MenuLink onClick={logOut}>Logout</MenuLink>
				: <MenuLink href="/connect">Login</MenuLink>
			}
		</ul>
	</div>;
}