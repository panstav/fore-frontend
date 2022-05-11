import Home from 'pages/Home';
import Login from 'pages/Login';
import AddRootClaim from 'pages/AddRootClaim';
import ClaimDetail from 'pages/ClaimDetail';

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
		name: 'very-first-claims',
		path: '/very-first-claims',
		Component: AddRootClaim,
		minimumRole: roles.MEMBER
	},
	{
		name: 'claim-detail',
		path: '/claim/:id',
		Component: ClaimDetail,
		minimumRole: roles.MEMBER
	}
];