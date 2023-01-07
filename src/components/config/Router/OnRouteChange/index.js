import { connect } from "unistore/preact";
import { useLocation } from 'wouter-preact';

import scrollBackToTop from 'lib/scroll-back-to-top';

import actions from "./actions";

export default connect(null, actions)(OnRouteChange);

function OnRouteChange({ closeMenus }) {
	useLocation();

	closeMenus();

	// analytics - track page views
	if ('gtag' in window) window.gtag('page_view', window.location.pathname);

	// scroll to top
	scrollBackToTop();

	return null;
}