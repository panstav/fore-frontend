import Modal, { Title } from "wrappers/Modal";

import { Copy, Share } from "elements/Icon";

export default function ShareInvite({ shareInvite, shareInviteModalProps, hasWebShare, invitationLink, createInvitation }) {
	return <>

		<div className="has-text-centered">
			<button onClick={shareInvite} className="button is-primary is-outlined mt-5">Share an invite</button>
		</div>

		<Modal {...shareInviteModalProps} render={function ShareInviteModal({ }) {

			return <>
				<Title>Invite members</Title>
				<span>After joining with your link, Space members will be able to:</span>
				<div className="content">
					<ul className="mb-6">
						<li>View all existing Claims</li>
						<li>Create Claims of their own</li>
						<li>Claim in support or opposition to existing Claims</li>
						<li>Vote for best supporting or opposing Claims to power</li>
					</ul>
				</div>

				{invitationLink
					? <>
						<p>{invitationLink}</p>
						<div className="is-flex is-justify-content-space-evenly mt-5">
							<button className="button">
								<Copy />
								<div className="icon-text ml-2">Copy link</div>
							</button>
							{hasWebShare && <button className="button">
								<Share />
								<div className="icon-text ml-2">Share link</div>
							</button>}
						</div>
					</>
					: <div className="has-text-centered">
						<button onClick={createInvitation} className="button is-primary mx-auto">Create an Invitation Link</button>
					</div>}

			</>;
		}} />

	</>;
}