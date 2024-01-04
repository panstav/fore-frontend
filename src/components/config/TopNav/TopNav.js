import { Fragment } from 'preact';
import { Link } from 'wouter-preact';
import classNames from 'classnames';

import { Bell, Logo } from 'elements/Icon';

import SpaceSelector from './SpaceSelector';
import Notifications from './Notifications';
import SpacesMenu from './SpacesMenu';
import MobileMenu from './MobileMenu';

export default function TopNav({ homeButtonHref, isLoggedIn, isMenuOpen, isNotificationsOpen, toggleMainMenu, toggleNotificationsMenu, createSpace }) {

	const menuClasses = classNames('navbar-menu', isMenuOpen && 'is-active');
	const notificationsClasses = classNames('navbar-item has-dropdown is-hidden-touch', isNotificationsOpen && 'is-active');

	// noinspection HtmlUnknownTarget
	return <div className="navbar is-primary">
		<div className="container">
			<div className="navbar-brand is-justify-content-space-between">
				<a onClick={toggleMainMenu} className="navbar-burger is-hidden-desktop">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
				<div className="navbar-item is-flex-grow-1 is-justify-content-center is-align-items-center p-0">
					<HomeButton href={homeButtonHref} />
				</div>
				{isLoggedIn ? <Link to="/notifications">
					<a className="navbar-burger is-flex is-justify-content-center is-align-items-center is-hidden-desktop">
						<Bell className="current-color-stroke has-text-white" />
					</a>
				</Link> : <div className='navbar-burger' />}
			</div>
			<div className={menuClasses}>
				<div className="navbar-start">
					{isLoggedIn && <div className="navbar-item is-hidden-touch">
						<SpaceSelector createSpace={createSpace} />
					</div>}
					<div className="is-hidden-desktop">
						{isLoggedIn && <SpacesMenu createSpace={createSpace} />}
						<MobileMenu className="mt-4" />
					</div>
				</div>
				<div className="navbar-end">
					{isLoggedIn && <div onClick={toggleNotificationsMenu} className={notificationsClasses}>
						<Notifications />
					</div>}
				</div>
			</div>
		</div>
	</div>;
}

function HomeButton({ href }) {
	const Wrapper = href ? Link : Fragment;
	return <Wrapper to={href}>
		<a className='is-flex is-align-items-center px-4' style={{ height: '100%' }}>
			<Logo style={{ height: "2rem" }} className="is-clickable has-text-white" />
		</a>
	</Wrapper>;
}
