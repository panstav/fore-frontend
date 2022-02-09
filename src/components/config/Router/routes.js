import New from 'pages/New';
import Claim from 'pages/ClaimDetail';

import { roles } from 'constants.js';

export default [
	{
		name: 'home',
		path: '/',
		Component: New,
		minimumRole: roles.GUEST
	},
	{
		name: 'claim-detail',
		path: '/claim/:id',
		Component: Claim,
		minimumRole: roles.GUEST
	}
];