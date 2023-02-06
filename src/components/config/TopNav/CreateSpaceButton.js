import classNames from "classnames";

import { Plus } from "elements/Icon";

export default function CreateSpaceButton({ onClick, className: classes }) {
	const className = classNames("is-flex is-align-items-center", classes);
	return <a {...{ onClick, className }}>
		<Plus className="mr-2" style={{ width: '1.1rem' }} />
		<span className="icon-text is-size-6">Create a Space</span>
	</a>;
}