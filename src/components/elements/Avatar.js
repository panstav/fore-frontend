import classNames from "classnames";

import { Anonymous } from "elements/Icon";

import { isOffline } from "constants";

export default function Avatar({ isAnonymous, user, className: classes, style }) {

	const className = classNames("is-round", classes);

	if (isAnonymous) return <Anonymous {...{ className, style }} />;

	return <img
		{...{ className, style }}
		src={getImageUrl(user.id)}
		alt={user.name ? `Profile image of "${user.name}"` : ''}
	/>;
}

function getImageUrl (userId) {
	if (!isOffline) return `https://storage.googleapis.com/fore-www/avatars/${userId}.jpg`;
	return `https://avatars.dicebear.com/v2/avataaars/${userId}.jpg`;
}