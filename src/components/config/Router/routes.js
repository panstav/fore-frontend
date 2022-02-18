import Home from 'pages/Home';
import Claim from 'pages/ClaimDetail';

import { roles } from 'constants.js';

export default [
	{
		name: 'home',
		path: '/',
		Component: Home,
		minimumRole: roles.GUEST
	},
	{
		name: 'claim-detail',
		path: '/claim/:id',
		Component: Claim,
		minimumRole: roles.GUEST
	}
];