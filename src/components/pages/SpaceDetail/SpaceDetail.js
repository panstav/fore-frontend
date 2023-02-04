import Section from "wrappers/Section";
import Access from "wrappers/Access";

import Feed from "compounds/Feed";
import SignupForUpdates from "compounds/SignupForUpdates";
import FAQ from 'compounds/FAQ';

import ShareInvite from "./ShareInvite";
import Avatar from "components/elements/Avatar";

export default function Space({ id, type, name, participants }) {
	return <>

		<Section withTopMargin={true}>
			<h1 className="title has-text-centered">{name}</h1>
		</Section>

		<Section withTopMargin={false} withSidePadding={false} className="is-flex-desktop is-justify-content-center">

			<Feed spaceId={id} className="mx-auto" />

			{type === 'private'
				? null
				: <Section className="is-flex-shrink-1 is-small">

					{id === 'public'
						? <>
							<div className="box">
								<SignupForUpdates />
							</div>
							<FAQ />
						</>
						: <div className="box">
							<h3 className="title is-5">Members</h3>

							{participants.length < 2
								? <p>New members will be show up here.</p>
								: <ul className="is-flex is-flex-wrap-wrap is-justify-content-center">
									{participants.map((id) => {
										const author = { name: '', id };
										return <li key={id}>
											<Avatar {...{ author }} className="mx-1" style={{ width: '2.5rem' }} />
										</li>;
									})}
								</ul>
							}

							<Access only={r => r.ADMIN} atSpace={id}>
								<ShareInvite />
							</Access>
						</div>}

				</Section>}



		</Section>

	</>;
}