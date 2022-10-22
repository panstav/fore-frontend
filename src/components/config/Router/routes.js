import Home from 'pages/Home';
import ConnectToFore from 'pages/Connect';
import Support from 'pages/Support';
import Space from 'components/pages/SpaceDetail';
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
		name: 'connect',
		path: '/connect',
		Component: ConnectToFore,
		minimumRole: roles.GUEST
	},
	{
		name: 'support',
		path: '/support',
		Component: Support,
		minimumRole: roles.MEMBER
	},
	{
		name: 'space-home',
		path: '/space/:spaceId',
		Component: Space,
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