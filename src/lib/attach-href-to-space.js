export default function attachHref(space) {
	return {
		...space,

		// link to the space page
		// or to the homepage if the space is public
		href: space.id === 'public'
			? '/'
			: `/space/${space.id}`
	};
}