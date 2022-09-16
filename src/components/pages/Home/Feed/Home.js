import { Link } from 'wouter-preact';

import Section from 'wrappers/Section.js';

import Loader from 'elements/Loader.js';
import Avatar from 'elements/Avatar';

export default function Home({ claims, createNewClaim, isLoading }) {
	return <>
		<Section withTopMargin={true}>
			<h1 className="title">Recent</h1>
			<button onClick={createNewClaim} className="button is-primary">Create a Claim</button>
		</Section>

		{isLoading && <Section className="py-1" withTopMargin={true}>
			<Loader />
		</Section> }

		<Section withTopMargin={true}>
			{claims.map(Claim)}
		</Section>
	</>;
}

function Claim({ id, createdAtTimeAgo, content, author }) {
	return <Link href={`/claim/${id}`} key={id}>
		<a className="is-block mb-3" style={{ maxWidth: '70ch' }}>
			<div className="box">
				<div className="is-flex is-justify-content-space-between is-align-items-center">
					<div className="is-flex is-align-items-center">
						<Avatar userId={author.id} alt={`Profile image of "${author.name}"`} style={{ width: '1.5rem' }} />
						<span className="is-size-7">{author.name}</span>
					</div>
					<div className="is-size-7 has-text-grey-light">
						{createdAtTimeAgo}
					</div>
				</div>
				<div className="is-size-6 is-flex-grow-1 mt-3 mr-2 has-text-weight-bold">{content}</div>
			</div>
		</a>
	</Link>;
}