import { connect } from "unistore/preact";
import { useLocation } from "wouter-preact";

import actions from "./actions";

import Component from "./Notifications";

export default connect(mapStateToProps, actions)(Notifications);

function Notifications({ notifications, toggleNotificationsMenu, isOpen }) {

	const [location] = useLocation();
	const handleToggleNotificationsMenu = () => {
		if (location === '/notifications') return;
		toggleNotificationsMenu(!isOpen);
	};

	const props = {
		isOpen,
		notifications,
		toggleNotificationsMenu: handleToggleNotificationsMenu
	};

	return Component(props);

}

function mapStateToProps({ menus, notifications }) {
	return {
		isOpen: menus.notifications,
		notifications
	};
}