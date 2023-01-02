import { Link } from "wouter-preact";
import classNames from "classnames";

import { DownArrow } from "elements/Icon";

import CreateSpaceButton from "../CreateSpaceButton";

export default function SpaceSelector({ isOpenDropdown, toggleDropdown, currentSpaceName, availableSpaces, setCurrentSpace, dropdownRef, createSpace }) {

	const classes = classNames('dropdown is-left', isOpenDropdown && 'is-active');
	const buttonClasses = classNames('button fore-space-selector is-primary dropdown-trigger px-3', isOpenDropdown && 'dropdown-is-active');

	return <>
		<div ref={dropdownRef} className={classes}>
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
		</div>

		<Modal {...newSpaceModalProps} render={function CreateSpaceModal () {
			return <>
				<div className="field my-5">
					<NewSpaceNameInput />
				</div>
				<div className="boxes">
					{spaceTypes.map((type) => {
						return <div className="box is-paddingless">
							<SpaceType {...type} />
						</div>;
					})}
				</div>
			</>;
		}} />
	</>;
}

function SpaceType ({ name, label, description, icon: Icon }) {
	const { setValue } = useFormContext();
	return <button onClick={() => setValue('type', name)} className="reset is-flex is-align-items-center p-4 is-clickable" style={{ width: '100%' }}>
		<Icon />
		<div className="has-text-left">
			<span className="is-block has-text-weight-bold mb-1">{label} Space</span>
			<span className="is-block is-size-7">{description}</span>
		</div>
	</button>
}

function NewSpaceNameInput() {
	const { register } = useFormContext();
	return <>
		<label className="label" htmlFor="space-name">A name for your Space</label>
		<input className="input" id="space-name" type="text" placeholder={randomSpaceName()} {...register('name', { required: true, maxLength: 40 })} />
	</>;
}