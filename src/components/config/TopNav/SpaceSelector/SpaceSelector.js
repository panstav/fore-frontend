import { Link } from "wouter-preact";
import classNames from "classnames";

import { DownArrow } from "elements/Icon";

import CreateSpaceButton from "../CreateSpaceButton";

export default function SpaceSelector({ isOpenDropdown, toggleDropdown, currentSpaceName, availableSpaces, setCurrentSpace, dropdownRef, createSpace }) {

	const classes = classNames('dropdown is-left', isOpenDropdown && 'is-active');
	const buttonClasses = classNames('button fore-space-selector is-primary dropdown-trigger px-3', isOpenDropdown && 'dropdown-is-active');

	return <div ref={dropdownRef} className={classes}>
		<button className={buttonClasses} onClick={toggleDropdown} tabIndex="0" style={{ fontSize: '0.9rem' }}>
			<span className="icon-text text-wrap has-text-left" style={{ width: '15ch' }}>{currentSpaceName}</span>
			<DownArrow className="mr-0" style={{ width: '0.6rem' }} />
		</button>
		<div className="dropdown-menu fore-available-spaces">
			<div className="dropdown-content">
				{availableSpaces.map(({ id, key, href, tag, name, isCurrent }) => {
					const onClick = () => { toggleDropdown(); setCurrentSpace(id); };
					const className = classNames('dropdown-item is-flex is-justify-content-space-between is-align-items-center', isCurrent && 'is-active');
					return <Link {...{ key, href, onClick, className }}>
						<span className="icon-text is-size-6">{name}</span>
						{tag && <span className="tag is-size-8 is-light" style={{ textTransform: 'uppercase', alignItems: 'end' }}>{tag}</span>}
					</Link>;
				})}
				<CreateSpaceButton onClick={() => { toggleDropdown(); createSpace(); }} className="dropdown-item pl-3" />
			</div>
		</div>
	</div>;
}