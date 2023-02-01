import Home from 'pages/Home';
import ConnectToFore from 'pages/Connect';
import Space from 'pages/SpaceDetail';
import ClaimDetail from 'pages/ClaimDetail';
import Notifications from 'pages/Notifications';
import PrivacyPolicy from 'pages/PrivacyPolicy.js';

import redirects from './redirects.js';

import { roles } from 'constants.js';

export default redirects.concat([
	{
		name: 'home',
		path: '/',
		Component: Home,
		minimumRole: roles.GUEST,
		seo: {
			description: 'Debate, organize and earn for your ideas.',
		}
	},
	{
		name: 'connect',
		path: '/connect',
		Component: ConnectToFore,
		minimumRole: roles.GUEST,
		seo: {
			title: 'Signup / Login',
			description: 'Use your Google account to sign up or log in to Fore.'
		}
	},
	{
		name: 'space-detail',
		path: '/space/:spaceId',
		Component: Space,
		minimumRole: roles.MEMBER
	},
	{
		name: 'invitation-to-space',
		path: '/space/:spaceId?invitation=:invitationId',
		Component: SpaceInvitation,
		minimumRole: roles.GUEST
	},
	{
		name: 'claim-detail',
		path: '/claim/:id',
		Component: ClaimDetail,
		minimumRole: roles.MEMBER
	},
	{
		name: 'notifications',
		path: '/notifications',
		Component: Notifications,
		minimumRole: roles.MEMBER
	},
	{
		name: 'privacy-policy',
		path: '/privacy-policy',
		Component: PrivacyPolicy,
		minimumRole: roles.GUEST,
		seo: {
			title: 'Privacy Policy',
			description: 'At Fore, accessible from https://fore.is, we take the privacy of our visitors seriously. This Privacy Policy document contains straightforward outline of the information that is recorded by Fore.'
		}
	}
]);