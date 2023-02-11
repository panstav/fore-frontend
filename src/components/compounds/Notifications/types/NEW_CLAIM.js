import { Logo } from "elements/Icon";

import Notification from './Wrapper';

export default function NEW_CLAIM({ newClaimId, isAnonymous, spaceId }) {
	return <Notification icon={Logo} url={`/claim/${newClaimId}`}>
		New{isAnonymous ? ` ${spaceId === 'public' ? 'public ' : ''}anonymous ` : ' '}Claim.
	</Notification>;
}