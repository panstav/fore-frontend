import { Link } from 'wouter-preact';
import classNames from 'classnames';

import BoxLink from 'elements/BoxLink';
import Avatar from 'elements/Avatar';
import Username from 'elements/Username';

export default function Feed({ createNewClaim, claims, hasLoadedAll, loadMoreClaims, className: classes }) {
	const className = classNames('boxes has-text-left', classes);
	return <div withSidePadding={false} className="claims-container">
		<div {...{ className }} style={{ width: '100%' }}>
			{!claims.length && <div className='box has-no-hover has-text-centered'>New Claims will show up here.</div>}
			<BoxLink onClick={createNewClaim}>Create a Claim</BoxLink>
			{claims.map(Claim)}
			{hasLoadedAll || !claims.length ? null
				: <BoxLink onClick={loadMoreClaims}>Load more</BoxLink>}
		</div>
	</div>;
}

function Claim({ id, createdAtTimeAgo, content, owner, isAnonymous }) {
	return <Link key={id} href={`/claim/${id}`}>
		<a>
			<div className="box reset-anchors">
				<div className="is-flex is-justify-content-space-between is-align-items-center no-select-marks">
					<div className="is-flex is-align-items-center">
						<Avatar user={owner} {...{ isAnonymous }} className="mr-2" style={{ width: '1.5rem' }} />
						<Username name={owner.name} {...{ isAnonymous }} className="is-size-7" />
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