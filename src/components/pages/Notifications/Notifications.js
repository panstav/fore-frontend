import Section from "wrappers/Section";

import NotificationsFeed from "compounds/Notifications";

export default function Notifications({ notifications }) {
	return <Section>
		<h1 className="title">Notifications</h1>
		<NotificationsFeed notifications={notifications} />
	</Section>;
}