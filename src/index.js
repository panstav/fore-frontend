import 'preact/debug';

import { h, render } from 'preact';
import htm from 'htm';

import 'services/js-tracking';
import 'lib/timeago-setup.js';

import App from 'App';

// integrate htm with Preact
const html = htm.bind(h);

// run app
render(
	html`<${App}/>`,
	document.body
);