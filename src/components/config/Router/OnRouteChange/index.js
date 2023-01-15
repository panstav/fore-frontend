import { connect } from "unistore/preact";
import { useLocation } from 'wouter-preact';

import scrollBackToTop from 'lib/scroll-back-to-top';

import actions from "./actions";

import { roles } from "constants";

export default connect(mapStateToProps, actions)(OnRouteChange);

function OnRouteChange({ isInternalTraffic, closeMenus }) {
	useLocation();

	// close all menus
	closeMenus();

	// scroll to top
	scrollBackToTop();

	// analytics - track page views
	// unless the user is from Fore
	if (!isInternalTraffic && 'gtag' in window) window.gtag('page_view', window.location.pathname);

	return null;
}

function mapStateToProps ({ user }) {
	return {
		isInternalTraffic: user.role === roles.ADMIN
	};
}