import { Link } from 'wouter-preact';

import { Logo } from 'base/Icon';

export default function TopNav() {
	// noinspection HtmlUnknownTarget
	return <div className="navbar is-primary is-fixed-top">
		<div className="container">
			<div className="navbar-brand">
				<div className="navbar-item">
					<Link href="/">
						<Logo style={{ height: "2rem" }} className="ml-1 is-clickable has-text-white"/>
					</Link>
				</div>
				{/* <Link href="/top" className="navbar-item is-size-7 is-clickable">Top</Link>
				<Link href="/rising" className="navbar-item is-size-7 is-clickable">Rising</Link>
				<Link href="/new" className="navbar-item is-size-7 is-clickable">New</Link> */}
			</div>
		</div>
	</div>;
}