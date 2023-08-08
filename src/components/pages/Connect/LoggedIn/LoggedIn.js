import { Link } from "wouter-preact";

import useCreateSpace from "hooks/use-create-space";

import Greeting from "elements/Greeting";

export default function LoggedIn({ userName, spaces }) {
	return <>
		<h2 className="is-title is-size-4 has-text-weight-bold mt-1 mb-2">
			<Greeting userName={userName} />
		</h2>

		{spaces.length
			? <SpacesMenu {...{spaces}} />
			: <NoSpaces />}

		<div className="is-size-7">
			Not you? <Link to="/logout">Log out</Link>
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
	const createSpace = useCreateSpace();
	return <div className="notification">
		You don&apos;t have access to any Spaces.
		<button className="button is-small is-primary is-outlined mt-2" onClick={createSpace}>Create a Space</button>
	</div>;
}