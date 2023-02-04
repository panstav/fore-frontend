export default function SpaceInvitationNotice({ inviter, space, className }) {
	return <p className={className}>
		You've been invited by <span className='has-text-weight-bold'>{inviter}</span> to join <span className='has-text-primary has-text-weight-bold'>{space}</span>.
	</p>;
}