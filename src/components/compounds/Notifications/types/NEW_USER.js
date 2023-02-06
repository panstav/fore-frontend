import { Logo } from "elements/Icon";

import Notification from './Wrapper';

export default function NEW_USER({ email, createdAt }) {
	return <Notification icon={Logo} createdAt={createdAt}>
		{email} joined.
	</Notification>;
}