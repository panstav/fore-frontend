import Home from 'pages/Home';
import Login from 'pages/Login';
import ClosedBeta from 'pages/ClosedBeta';
import AddRootClaim from 'pages/AddRootClaim';
import ClaimDetail from 'pages/ClaimDetail';
import PrivacyPolicy from 'pages/PrivacyPolicy.js';

import { roles } from 'constants.js';

export default [
	{
		name: 'home',
		path: '/',
		Component: Home,
		minimumRole: roles.ADMIN
	},
	{
		name: 'closed-beta',
		path: '/closed-beta',
		Component: ClosedBeta,
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
		minimumRole: roles.ADMIN
	},
	{
		name: 'privacy-policy',
		path: '/privacy-policy',
		Component: PrivacyPolicy,
		minimumRole: roles.GUEST
	}
];