export default function Username({ isAnonymous, author, className }) {
	const name = isAnonymous ? "Anonymous" : author.name;
	return <span {...{ className }}>{name}</span>;
}