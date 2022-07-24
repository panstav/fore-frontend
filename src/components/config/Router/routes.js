import Home from 'pages/Home';
import Login from 'pages/Login';
import Support from 'pages/Support';
import ClaimDetail from 'pages/ClaimDetail';
import PrivacyPolicy from 'pages/PrivacyPolicy.js';

import redirects from './redirects.js';

import { roles } from 'constants.js';

export default redirects.concat([
	{
		name: 'home',
		path: '/',
		Component: Home,
		minimumRole: roles.GUEST
	},
	{
		name: 'login',
		path: '/login',
		Component: Login,
		minimumRole: roles.GUEST
	},
	{
		name: 'support',
		path: '/support',
		Component: Support,
		minimumRole: roles.GUEST
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
]);