import { useContext } from "preact/hooks";

import { asideContentClasses, asideHeaderClasses } from "lib/css";

import { SpaceDetailContext } from "contexts";

import Section from "wrappers/Section";
import Access from "wrappers/Access";

import Feed from "compounds/Feed";
import SignupForUpdates from "compounds/SignupForUpdates";
import FAQ from 'compounds/FAQ';

import Avatar from "elements/Avatar";

import ShareInvite from "./ShareInvite";
import DebateSpaceSetup from "./DebateSpaceSetup";

export default function Space({ id, name, isSettingUpDebate, isPublicSpace, isShowingMembersSection, participants }) {
	return <>

		<Section withTopMargin={true}>
			<h1 className="title has-text-centered">{name}</h1>
		</Section>

		<Section withSidePadding={isSettingUpDebate}>
			{isSettingUpDebate
				? <DebateSpaceSetup />
				: <SpaceDetail {...{ id, isPublicSpace, isShowingMembersSection, participants }} />}
		</Section>

	</>;
}

function SpaceDetail({ id, isPublicSpace, isShowingMembersSection, participants }) {
	return <div className="columns m-auto">

		<div className="column is-three-quarters px-0-mobile">
			<Feed spaceId={id} className="mx-auto" />
		</div>

		<div className="column is-one-quarter pt-4">
			{isPublicSpace && <>
				<FAQ />
				<SignupForUpdates />
			</>}

			{isShowingMembersSection && <div>
				<h3 className={asideHeaderClasses}>Members</h3>
				{participants.length < 2
					? <>
						<p className={asideContentClasses}>New members will be show up here.</p>
						<Access only={r => r.ADMIN} atSpace={id}>
							<ShareInvite ButtonComponent={({ onClick }) => {
								return <button onClick={onClick} className="button is-small is-primary is-outlined mt-3">Share an invite</button>;
							}} />
						</Access>
					</>
					: <ul className="is-flex is-flex-wrap-wrap">
						{participants.map((id, index) => {
							return <ListItemAvatar key={id} isFirst={index === 0}>
								<Avatar user={{ id, name: '' }} style={{ width: '1.75rem' }} />
							</ListItemAvatar>;
						}).concat(<Access only={r => r.ADMIN} atSpace={id}>
							<ShareInvite key="share-invite" ButtonComponent={({ onClick }) => <ListItemAvatar>
								<button onClick={onClick} className="button is-round p-0" style={{ width: '1.75rem', height: '1.75rem' }}>+</button>
							</ListItemAvatar>} />
						</Access>)}
					</ul>}
			</div>}

		</div>

	</div>;
}

function ListItemAvatar({ isFirst, children }) {
	const marginLeft = isFirst || '-0.5rem';
	return <li style={{ marginLeft }}>
		{children}
	</li>;
}