import Modal, { Title } from "wrappers/Modal";

import { Copy, Share } from "elements/Icon";

export default function ShareInvite({ shareInvite, shareInviteModalProps, hasWebShare, invitationLink, createInvitation, selectEntireLink, copyUrl, webShare }) {
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
						<div className="buttons is-flex mb-0">
							<button onClick={copyUrl} className="button">
								<Copy />
								<div className="icon-text ml-2">Copy link</div>
							</button>
							{hasWebShare && <button onClick={webShare} className="button">
								<Share />
								<div className="icon-text ml-2">Share link</div>
							</button>}
						</div>
						<input onClick={selectEntireLink} className="input" type="url" value={invitationLink} />
					</>
					: <div className="has-text-centered">
						<button onClick={createInvitation} className="button is-primary mx-auto">Create an Invitation Link</button>
					</div>}

			</>;
		}} />

	</>;
}