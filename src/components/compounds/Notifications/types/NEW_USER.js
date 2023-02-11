import { Logo } from "elements/Icon";

import Notification from './Wrapper';

export default function NEW_USER({ email }) {
	return <Notification icon={Logo}>
		{email} joined.
	</Notification>;
}