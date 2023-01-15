import { Link } from "wouter-preact";
import classNames from "classnames";

export default function SpacesMenu({ spaces }) {
	return <div className="menu px-2">
		<p className="menu-label mb-1">
			Spaces
		</p>
		<ul className="menu-list">
			{spaces.map(({ id, name, isCurrent, href }) => {
				const linkClasses = classNames(isCurrent && 'is-active');
				return <li key={id}>
					<Link to={href}>
						<a className={linkClasses}>
							{name}
						</a>
					</Link>
				</li>;
			})}
		</ul>
	</div>;
}