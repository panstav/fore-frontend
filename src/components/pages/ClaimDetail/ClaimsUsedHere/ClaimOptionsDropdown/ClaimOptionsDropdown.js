import { Fragment } from 'preact';
import classNames from 'classnames';

import Tooltip from 'wrappers/Tooltip';

import { Dropdown, Info } from 'elements/Icon';

export default function ClaimOptionsDropdown({ isOpen, dropDownOptions, direction, openDropdown, onBlur }) {
	const side = { support: 'left', opposition: 'right' }[direction];
	const classes = classNames('dropdown is-active', `is-${side}`);

	return <div className={classes} {...{ onBlur }} tabIndex={0}>
		<div className="dropdown-trigger has-text-grey-light is-flex" onClick={openDropdown}>
			<Dropdown isVertical={true} style={{ opacity: '0.5' }} />
		</div>
		{isOpen && <div className="dropdown-menu" id="dropdown-menu" role="menu">
			<div className="dropdown-content">
				{dropDownOptions.map(({ isDivider, key, label, disabled, onClick, icon: Icon, slug, tooltip }) => {
					if (isDivider) return <hr className="dropdown-divider" {...{key}} />;
					return <Fragment key={label}>
						<a className="dropdown-item is-size-7 is-flex is-justify-content-space-between is-align-items-center" {...disabled ? { disabled } : { onClick }}>
							<div className="is-flex is-align-items-center">
								<div className="icon-wrapper is-flex is-justify-content-center mr-2">
									<Icon className={slug} />
								</div>
								<span>{label}</span>
							</div>
							{tooltip && <Tooltip content={tooltip} className="disable-unaffected">
								<Info onClick={stopPropagation} className="has-text-grey" style={{ width: '1.25em' }} />
							</Tooltip>}
						</a>
					</Fragment>;
				})}
			</div>
		</div>}
	</div>;
}

function stopPropagation(event) {
	event.stopPropagation();
}