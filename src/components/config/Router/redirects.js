import { Redirect } from "wouter-preact";

import { roles } from "constants";

const redirects = [
	{
		from: '/very-first-claims',
		to: '/support'
	}
];

export default redirects.map(({ from, to }) => ({
	path: from,
	Component: redirectTo(to),
	minimumRole: roles.GUEST,
	name: 'redirect'
}));

function redirectTo(to) {
	return () => <Redirect to={to} />;
}
