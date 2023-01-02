import { Link } from "wouter-preact";
import classNames from "classnames";

import { DownArrow } from "elements/Icon";

export default function SpaceSelector({ isOpenDropdown, toggleDropdown, currentSpaceName, availableSpaces, setCurrentSpace, closeDropdown }) {

	const className = classNames('dropdown is-left',isOpenDropdown && 'is-active');
	const buttonClasses = classNames('button fore-space-selector is-primary dropdown-trigger px-3', isOpenDropdown && 'dropdown-is-active');

	return <div {...{ className }}>
		<button className={buttonClasses} onClick={toggleDropdown} onBlur={closeDropdown} tabIndex="0" style={{ fontSize: '0.9rem' }}>
			<span className="icon-text text-wrap has-text-left clarify-mask" style={{ width: '15ch' }}>{currentSpaceName}</span>
			<DownArrow className="mr-0" style={{ width: '0.6rem' }} />
		</button>
		<div className="dropdown-menu fore-available-spaces">
			<div className="dropdown-content">
				{availableSpaces.map(({ id, href, disabled, tag, name }) => {
					const onClick = () => { toggleDropdown(); setCurrentSpace(id); };
					return <DropdownItemOrOption {...{ href, disabled, toggleDropdown, onClick }} key={href} className="dropdown-item is-flex is-justify-content-space-between is-align-items-center">
						<span className="clarify-mask">{name}</span>
						{tag && <span className="tag is-size-8 is-light" style={{ textTransform: 'uppercase', alignItems: 'end' }}>{tag}</span>}
					</DropdownItemOrOption>;
				})}
			</div>
		</div>
	</div>;
}

function DropdownItemOrOption({ href, toggleDropdown, ...props }) {
	return props.disabled
		// disabled item should not appear clickable
		? <div {...props} className="has-text-gray" />
		: href
			// link is available - render a clickable item
			? <Link {...{ href, ...props }} />
			// no link means we don't do anything, just close the dropdown
			: <a onClick={toggleDropdown} {...props} />;
}