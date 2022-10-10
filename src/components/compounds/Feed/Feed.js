import { Link } from 'wouter-preact';

import Section from 'wrappers/Section.js';

import Avatar from 'elements/Avatar';

export default function Feed({ claims }) {
	return <Section withTopMargin={true} noSidePadding={true} className="claims-container">
		<div className="boxes has-text-left" style={{ width: '100%', maxWidth: '70ch' }}>
			{claims.map(Claim)}
		</div>
	</Section>;
}

function Claim({ id, createdAtTimeAgo, content, author }) {
	return <div className="box reset-anchors" key={id}>
		<Link href={`/claim/${id}`}>
			<a>
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
			</a>
		</Link>
	</div>;
}