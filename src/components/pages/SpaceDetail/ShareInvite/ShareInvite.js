import classNames from "classnames";

import Modal, { Title } from "wrappers/Modal";
import { Copy, Share } from "elements/Icon";

export default function ShareInvite({ ButtonComponent, shareInvite, shareInviteModalProps, hasWebShare, invitationLink, createInvitation, selectEntireLink, copyUrl, webShare, numberOfParticipants, spaceMaxParticipants, qrRef }) {
	const qrContainerClassName = classNames('has-text-centered', invitationLink && 'mt-5 pt-2');

	return <>

		<ButtonComponent onClick={shareInvite} />

		<Modal {...shareInviteModalProps} render={function ShareInviteModal() {
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

				{invitationLink && <>
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
				</>}

				{!invitationLink && (numberOfParticipants < spaceMaxParticipants) && <div className="has-text-centered">
					<button onClick={createInvitation} className="button is-primary mx-auto">Create an Invitation Link</button>
				</div>}

				<div className={qrContainerClassName} ref={qrRef} />

				<div className="mt-5 pt-3">

					<progress className="progress mb-2" value={numberOfParticipants} max={spaceMaxParticipants}>
						{100 * (numberOfParticipants / spaceMaxParticipants)}%
					</progress>

					<p className="has-text-centered is-size-7">
						{numberOfParticipants < spaceMaxParticipants
							?	<span>This Space has room for <span className="has-text-weight-bold">{spaceMaxParticipants - numberOfParticipants}</span> more members.</span>
							: <span className="has-text-weight-bold">This Space has no room for more members.</span>
						}
					</p>

				</div>

			</>;
		}} />

	</>;
}