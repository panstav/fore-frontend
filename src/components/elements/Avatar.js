import classNames from "classnames";

import { Anonymous } from "elements/Icon";

export default function Avatar({ isAnonymous, user, className: classes, style }) {

	const className = classNames("is-round", classes);

	if (isAnonymous) return <Anonymous {...{ className, style }} />;

	return <img
		{...{ className, style }}
		src={`https://storage.googleapis.com/fore-www/avatars/${user.id}.jpg`}
		alt={user.name ? `Profile image of "${user.name}"` : ''}
	/>;
}