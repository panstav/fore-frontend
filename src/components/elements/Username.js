export default function Username({ name, isAnonymous, className }) {
	if (isAnonymous) name = "Anonymous";
	return <span {...{ className }}>{name}</span>;
}