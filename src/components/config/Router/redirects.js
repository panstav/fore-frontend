import { Redirect } from "wouter-preact";

import { roles } from "constants";

const redirects = [
	{
		from: '/space/public',
		to: '/'
	},
	{
		from: '/very-first-claims',
		to: '/'
	},
	{
		from: '/login',
		to: '/connect'
	},
	{
		from: '/support',
		to: '/'
	}
];

export default redirects.map(({ from, to }) => ({
	path: from,
	Component: redirectTo(to),
	minimumRole: roles.GUEST,
	name: 'redirect'
}));

function redirectTo(to) {
	return () => Redirect({to});
}