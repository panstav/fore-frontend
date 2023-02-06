import { useContext } from 'preact/hooks';

import Avatar from 'elements/Avatar';
import { UpArrow } from 'elements/Icon';

import { IconInIcon, SO, trimClaimContent } from './index';

import Notification from './Wrapper';
import { NotificationContext } from '../Notifications';

export default function NEW_VOTE({ direction, parentId, createdAt, parentContent, voterFirstName }) {
	return <Notification icon={NewVoteUserIcon} url={`/claim/${parentId}`} createdAt={createdAt}>
		{voterFirstName} voted for your <SO>{direction}</SO> to "{trimClaimContent(parentContent)}"
	</Notification>;
}

function NewVoteUserIcon (props) {
	const { voterFirstName, voterId } = useContext(NotificationContext);

	return <IconInIcon
		{...props}
		outer={() => <Avatar author={{ name: voterFirstName, id: voterId }} />}
		inner={(props) => <UpArrow {...props} className="has-text-success" svgProps={{ style: { transform: 'scale(1.5)' } }} />}
	/>;
}