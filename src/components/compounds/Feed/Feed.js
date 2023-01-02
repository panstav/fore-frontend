import { Link } from 'wouter-preact';
import classNames from 'classnames';

import Section from 'wrappers/Section.js';

import Avatar from 'elements/Avatar';
import Username from 'elements/Username';

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

function Claim({ id, createdAtTimeAgo, content, author, isAnonymous }) {
	const contentClasses = classNames('is-size-6 is-flex-grow-1 no-select-marks has-text-weight-bold mt-3 mr-2 clarify-mask');
	return <Link key={id} href={`/claim/${id}`}>
		<a>
			<div className="box reset-anchors">
				<div className="is-flex is-justify-content-space-between is-align-items-center no-select-marks">
					<div className="is-flex is-align-items-center">
						<Avatar {...{ author, isAnonymous }} className="mr-2" style={{ width: '1.5rem' }} />
						<Username {...{ author, isAnonymous }} className="is-size-7" />
					</div>
					<div className="is-size-7 has-text-grey-light">
						{createdAtTimeAgo}
					</div>
				</div>
				<div className={contentClasses}>{content}</div>
			</div>
		</a>
	</Link>;
}

function BoxLink(props) {
	return <div className="box has-text-centered is-link py-2" {...props} />;
}