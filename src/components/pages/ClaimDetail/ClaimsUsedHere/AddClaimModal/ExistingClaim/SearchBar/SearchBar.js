import classNames from 'classnames';

import { Search } from 'elements/Icon';

export default function SearchBar({ onChange, isLoading, className }) {

	const classes = classNames(
		'control has-icons-left',
		isLoading ? 'is-loading' : null,
		className
	);

	return <div className={classes}>
		<input {...{onChange}} className="input clarity-mask" placeholder="Search" />
		<Search className="p-2 is-left" />
	</div>;

}