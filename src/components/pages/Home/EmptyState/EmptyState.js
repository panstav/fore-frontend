import Section from "wrappers/Section";

export default function EmptyState({ createSpace }) {
	return <Section className="is-medium">
		<div className="content">
			<h1>Welcome! 👋</h1>
			<p>It looks like you haven&apos;t joined or created any Spaces yet.</p>
			<p>If you know someone with a Space on Fore - ask them for an invitation and join their Space.</p>
			<p>Otherwise - Go ahead and create a Space to get started.</p>
			<div className="has-text-centered mt-5">
				<button onClick={createSpace} className="button is-primary is-outlined">Create a Space</button>
			</div>
		</div>
	</Section>;
}