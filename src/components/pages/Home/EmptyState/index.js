import Section from "wrappers/Section";

export default function HomeEmptyState () {
	return <Section className="content">
		<h1>Welcome! 👋</h1>
		<p>It looks like you haven't joined or created any Spaces yet.</p>
		<p>If you know someone with a Space on Fore - ask them for an invitation to join their Space.</p>
		<p>Otherwise - Go ahead and create a Space to get started.</p>
		<button className="button is-primary is-outlined">Create a Space</button>
	</Section>;
}