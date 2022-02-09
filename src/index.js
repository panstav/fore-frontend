import 'preact/debug';

import { h, render } from 'preact';
import htm from 'htm';

import onReady from '@wordpress/dom-ready';

import 'lib/timeago-setup.js';

import Config from 'config/Providers';
import App from 'App';

const Wrapper = () => <Config><App/></Config>;

onReady(async () => {

	// integrate htm with Preact
	const html = htm.bind(h);

	// run app
	render(
		html`<${Wrapper}/>`,
		document.body
	);

});