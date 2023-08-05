export default function Username({ name: nameProp, isAnonymous, className }) {
	const name = isAnonymous ? "Anonymous" : nameProp;
	return <span {...{ className }}>{name}</span>;
}