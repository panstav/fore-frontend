import { useContext } from "preact/hooks";
import classNames from "classnames";

import Avatar from "elements/Avatar";
import { Anonymous } from "elements/Icon";

import { SO, directedVars, trimClaimContent, IconInIcon } from "./index";
import Notification from './Wrapper';
import { NotificationContext } from "../Notifications";

export default function NEW_CHILD_CLAIM({ parentContent, direction, newClaimId, isAnonymous, childAuthorFirstName, createdAt }) {
	return <Notification icon={NewChildClaimIcon} url={`/claim/${newClaimId}`} createdAt={createdAt}>
		{!isAnonymous
			? childAuthorFirstName
			: "Anonymous"}
		&nbsp;wrote in&nbsp;
		<SO>{direction}</SO>
		&nbsp;of "{trimClaimContent(parentContent)}".
	</Notification>;
}

function NewChildClaimIcon(props) {
	const { childAuthorFirstName, childAuthorId, isAnonymous, direction } = useContext(NotificationContext);
	const { color } = directedVars[direction];

	return <IconInIcon
		{...props}
		innerIconWrapperStyle={{ padding: '2px' }}
		outer={() => isAnonymous
			? <Anonymous />
			: <Avatar author={{ name: childAuthorFirstName, id: childAuthorId }} />}
		inner={({ className: classes, style }) => {
			const className = classNames(`has-background-${color}`, classes);
			return <div className={className} style={style} />;
		}}
	/>;
}