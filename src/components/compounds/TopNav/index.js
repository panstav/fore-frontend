import { useLocation } from 'wouter-preact';

import Component from './TopNav';

export default function TopNav() {
	// don't show the top nav if we're viewing the promotional homepage
	const [location] = useLocation();
	if (location === '/') return null;

	return Component();
}