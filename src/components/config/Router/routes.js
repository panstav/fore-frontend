import Home from 'pages/Home';
import Login from 'pages/Login';
import Claim from 'pages/ClaimDetail';

import { roles } from 'constants.js';

export default [
	{
		name: 'home',
		path: '/',
		Component: Home,
		minimumRole: roles.MEMBER
	},
	{
		name: 'login',
		path: '/login',
		Component: Login,
		minimumRole: roles.GUEST
	},
	{
		name: 'claim-detail',
		path: '/claim/:id',
		Component: Claim,
		minimumRole: roles.MEMBER
	}
];