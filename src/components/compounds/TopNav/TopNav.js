import { Link } from 'wouter-preact';

import { Logo } from 'elements/Icon';

import SpaceSelector from './SpaceSelector';

export default function TopNav() {
	// noinspection HtmlUnknownTarget
	return <div className="navbar is-primary">
		<div className="container">
			<div className="navbar-brand">
				<div className="navbar-item">
					<Link href="/">
						<Logo style={{ height: "2rem" }} className="ml-1 is-clickable has-text-white" />
					</Link>
				</div>
				<div className="navbar-item">
					<SpaceSelector />
				</div>
			</div>
		</div>
	</div>;
}