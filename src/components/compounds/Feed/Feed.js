import { Link } from 'wouter-preact';
import classNames from 'classnames';

import Section from 'wrappers/Section.js';

import Avatar from 'elements/Avatar';

export default function Feed({ createNewClaim, claims, hasLoadedAll, loadMoreClaims, className: classes }) {
	const className = classNames('boxes is-medium has-text-left', classes);
	return <Section withSidePadding={false} className="claims-container">
		<div {...{ className }} style={{ width: '100%' }}>
			<BoxLink onClick={createNewClaim}>Create a Claim</BoxLink>
			{claims.map(Claim)}
			{hasLoadedAll || !claims.length ? null
				: <BoxLink onClick={loadMoreClaims}>Load more</BoxLink>}
		</div>
	</Section>;
}

function Claim({ id, createdAtTimeAgo, content, author }) {
	return <Link key={id} href={`/claim/${id}`}>
		<a>
			<div className="box reset-anchors">
				<div className="is-flex is-justify-content-space-between is-align-items-center no-select-marks">
					<div className="is-flex is-align-items-center">
						<Avatar userId={author.id} alt={`Profile image of "${author.name}"`} style={{ width: '1.5rem' }} />
						<span className="is-size-7">{author.name}</span>
					</div>
					<div className="is-size-7 has-text-grey-light">
						{createdAtTimeAgo}
					</div>
				</div>
				<div className="is-size-6 is-flex-grow-1 mt-3 mr-2 has-text-weight-bold no-select-marks">{content}</div>
			</div>
		</a>
	</Link>;
}

function BoxLink(props) {
	return <div className="box has-text-centered is-link py-2" {...props} />;
}