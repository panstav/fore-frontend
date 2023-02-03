import { Link } from "wouter-preact";

export default function LoggedIn({ userName, spaces, logOut }) {
	return <>
		<h2 className="is-title is-size-4 has-text-weight-bold mt-1 mb-2">Hey {userName}!</h2>

		{spaces.length
			? <SpacesMenu {...{spaces}} />
			: <NoSpaces />}

		<div className="is-size-7">
			Not you? <span onClick={logOut} className="is-link">Log out</span>
		</div>
	</>;
}

function SpacesMenu({ spaces }) {
	return <div className="menu my-4">
		<h3 className="menu-label mb-1">Your spaces:</h3>
		<ul className="menu-list">
			{spaces.map(({ name, id, link }) => {
				return <li key={id}>
					<Link href={link}>
						{name}
					</Link>
				</li>;
			})}
		</ul>
	</div>;
}

function NoSpaces() {
	return <div className="notification">
		You don&apos;t have access to any Space except for <Link to="/">Public</Link>.
	</div>;
}