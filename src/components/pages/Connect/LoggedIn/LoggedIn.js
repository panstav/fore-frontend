import { Link } from "wouter-preact";

export default function LoggedIn({ userName, spaces, logOut }) {
	return <>
		<h2 className="is-title is-size-4 has-text-weight-bold mt-1 mb-2">Hey {userName}!</h2>
		<div className="menu my-4">
			<h3 className="menu-label mb-1">Your spaces:</h3>
			<ul className="menu-list">
				{spaces.map(({ name, id, link }) => {
					return <li key={id}>
						<Link href={`/spaces/${link}`}>
							{name}
						</Link>
					</li>;
				})}
			</ul>
		</div>
		<div className="is-size-7">
			Not you? <span onClick={logOut} className="is-link">Log out</span>
		</div>
	</>;
}