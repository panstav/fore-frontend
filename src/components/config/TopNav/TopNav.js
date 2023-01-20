import { Link } from 'wouter-preact';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

import Modal, { Title } from 'wrappers/Modal';

import { Bell, Logo } from 'elements/Icon';
import TrimmedInput from 'elements/TrimmedInput';

import SpaceSelector from './SpaceSelector';
import Notifications from './Notifications';
import SpacesMenu from './SpacesMenu';
import MobileMenu from './MobileMenu';

import { meta } from 'constants';

export default function TopNav({ isMenuOpen, isNotificationsOpen, toggleMainMenu, toggleNotificationsMenu, createSpace, newSpaceModalProps }) {

	const menuClasses = classNames('navbar-menu', isMenuOpen && 'is-active');
	const notificationsClasses = classNames('navbar-item has-dropdown is-hidden-touch', isNotificationsOpen && 'is-active');

	// noinspection HtmlUnknownTarget
	return <>
		<div className="navbar is-primary">
			<div className="container">
				<div className="navbar-brand is-justify-content-space-between">
					<a onClick={toggleMainMenu} className="navbar-burger is-hidden-desktop">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
					<div className="navbar-item is-flex-grow-1 is-justify-content-center is-align-items-center p-0">
						<Link to="/">
							<a className='is-flex is-align-items-center px-4' style={{ height: '100%' }}>
								<Logo style={{ height: "2rem" }} className="is-clickable has-text-white" />
							</a>
						</Link>
					</div>
					<Link to="/notifications">
						<a className="navbar-burger is-flex is-justify-content-center is-align-items-center is-hidden-desktop">
							<Bell className="current-color-stroke has-text-white" />
						</a>
					</Link>
				</div>
				<div className={menuClasses}>
					<div className="navbar-start">
						<div className="navbar-item is-hidden-touch">
							<SpaceSelector createSpace={createSpace} />
						</div>
						<div className="is-hidden-desktop">
							<SpacesMenu createSpace={createSpace} />
							<MobileMenu className="mt-4" />
						</div>
					</div>
					<div className="navbar-end">
						<div onClick={toggleNotificationsMenu} className={notificationsClasses}>
							<Notifications />
						</div>
					</div>
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