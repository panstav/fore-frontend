import classNames from "classnames";

export default function Username({ isAnonymous, author, className: classes }) {
	const className = classNames('clarify-mask', classes);
	const name = isAnonymous ? "Anonymous" : author.name;
	return <span {...{ className }}>{name}</span>;
}