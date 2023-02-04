import Section from 'wrappers/Section';

import SpaceInvitationNotice from 'elements/SpaceInvitationNotice';

export default function SpaceInvitation({ inviter, space, acceptInvitation }) {
	return <Section>
		<div className='box is-medium mx-auto has-text-centered'>
			<SpaceInvitationNotice {...{ inviter, space }} />
			<button onClick={acceptInvitation} className="button is-primary mt-5">Accept invitation</button>
		</div>
	</Section>;
}