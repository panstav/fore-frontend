import { Link } from "wouter-preact";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";

import Modal, { Title } from "wrappers/Modal";

import TrimmedInput from "elements/TrimmedInput";
import { DownArrow, Plus } from "elements/Icon";

import { meta } from "constants.js";

export default function SpaceSelector({ isOpenDropdown, toggleDropdown, currentSpaceName, availableSpaces, setCurrentSpace, dropdownRef, newSpaceModalProps, createSpace }) {

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
					<a onClick={() => { toggleDropdown(); createSpace(); }} className="dropdown-item is-flex is-align-items-center">
						<Plus className="mr-2" style={{ width: '1.1rem' }} />
						<span className="icon-text is-size-6">Create a Space</span>
					</a>
				</div>
			</div>
		</div>

		<Modal {...newSpaceModalProps} render={function CreateSpaceModal({ hideModal, spaceTypes, hasCreatedBothTypes }) {
			return <>
				<Title>Create a new Space</Title>
				{hasCreatedBothTypes
					? <p className="mb-5">You have already created a private and a shared space.<br />If you need more Spaces, <a href={`mailto:${meta.contactEmailAddress}`} target="_blank">contact us</a>.</p>
					: <div className="field my-5">
						<label className="label" htmlFor="space-name">A name for your Space</label>
						<TrimmedInput id="space-name" name="name" maxLength={30} placeholder={randomSpaceName()} />
					</div>
				}
				<div className="boxes reset-anchors">
					{spaceTypes.map((type) => {
						return <div className="box is-paddingless">
							<SpaceType {...type} onClickCallback={hideModal} />
						</div>;
					})}
				</div>
			</>;
		}} />
	</>;
}

function SpaceType({ name, label, description, icon: Icon, existingSpace, onClickCallback }) {
	const spaceClassName = classNames('is-block has-text-weight-bold mb-1', existingSpace && 'has-text-primary');

	return <Wrapper {...{ name, existingSpace, onClickCallback }} className="reset is-flex is-align-items-center p-4 is-clickable" style={{ width: '100%' }}>
		<Icon className="ml-1 mr-5" style={{ width: '2rem' }} />
		<div className="has-text-left">
			<span className={spaceClassName} style={{ lineHeight: 1 }}>{existingSpace ? existingSpace.name : label}</span>
			<span className="is-block is-size-7" style={{ lineHeight: 1 }}>{existingSpace ? `Go to your ${label}` : description}</span>
		</div>
	</Wrapper>;
}

function Wrapper({ name, existingSpace, onClickCallback, ...props }) {
	const { setValue } = useFormContext();

	const elemProps = existingSpace ? { onClick: onClickCallback, href: existingSpace.href } : { onClick: () => setValue('type', name) };
	const Elem = existingSpace ? Link : 'button';

	return <Elem {...props} {...elemProps} />;
}

function randomSpaceName() {

	const spaceNames = [
		"Team Brainstorming",
		"Company Strategy Planning",
		"Group Project Discussion",
		"New Product Ideation",
		"Event Planning Committee",
		"Community Decision Making",
		"Political Action Group",
		"Nonprofit Board Meeting",
		"Classroom Debate Club",
		"Startup Pitch Session",
		"Idea Workshop",
		"Innovation Lab",
		"Brainstorming Bootcamp",
		"Solution Squad",
		"Think Tank",
		"Creative Collective",
		"Problem-Solving Posse",
		"Idea Incubator",
		"Innovation Hub",
		"Brainstorming Braintrust",
		"Post-Event Debrief",
		"Event Feedback Forum",
		"Event Planning Recap",
		"Post-Event Follow-Up",
		"Event Review Session",
		"Hackathon Planning",
		"Hackathon Support",
		"Hackathon Collaboration",
		"Festival Organizing",
		"Festival Volunteer Coordination",
		"Retreat Planning",
		"Retreat Group Discussion",
		"Seminar Coordination",
		"Seminar Group Work",
		"Monthly Planning Meeting",
		"Weekly Team Check-In"
	];

	return spaceNames[Math.floor(Math.random() * spaceNames.length)];
}