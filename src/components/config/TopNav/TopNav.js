import { Link } from 'wouter-preact';
import classNames from 'classnames';

import { Bell, Logo } from 'elements/Icon';

import SpaceSelector from './SpaceSelector';
import Notifications from './Notifications';
import SpacesMenu from './SpacesMenu';
import MobileMenu from './MobileMenu';

export default function TopNav({ isMenuOpen, isNotificationsOpen, toggleMainMenu, toggleNotificationsMenu }) {

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
					<Link to="/">
						<a className='is-flex is-align-items-center px-4' style={{ height: '100%' }}>
							<Logo style={{ height: "2rem" }} className="is-clickable has-text-white" />
						</a>
					</Link>
				</div>
				<Link to="/notifications">
					<a className="navbar-burger is-flex is-justify-content-center is-align-items-center is-hidden-desktop">
						<Bell className="has-text-white" />
					</a>
				</Link>
			</div>
			<div className={menuClasses}>
				<div className="navbar-start">
					<div className="navbar-item is-hidden-touch">
						<SpaceSelector />
					</div>
					<div className="is-hidden-desktop">
						<SpacesMenu />
						<MobileMenu className="mt-4" />
					</div>
				</div>
				<div className="navbar-end">
					<div onClick={toggleNotificationsMenu} className={notificationsClasses}>
						<Notifications />
					</div>
				</div>
			</div>
		</div>
	</div>;
}