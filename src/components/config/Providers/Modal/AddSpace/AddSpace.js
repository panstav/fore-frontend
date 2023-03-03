import { Link } from "wouter-preact";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";

import TrimmedInput from "elements/TrimmedInput";

import { meta } from "constants";

export default function CreateSpaceModal({ hideModal, spaceTypes, hasCreatedBothTypes }) {
	return <>
		{hasCreatedBothTypes
			? <p className="mb-5">You have already created a private and a shared space.<br />If you need more Spaces, <a href={`mailto:${meta.contactEmailAddress}`} target="_blank" rel="noreferrer">contact us</a>.</p>
			: <div className="field my-5">
				<label className="label" htmlFor="space-name">A name for your Space</label>
				<TrimmedInput id="space-name" name="name" maxLength={30} placeholder={randomSpaceName()} />
			</div>
		}
		<div className="boxes reset-anchors">
			{spaceTypes.map((type) => {
				return <div key={type} className="box is-paddingless">
					<SpaceType {...type} onClickCallback={hideModal} />
				</div>;
			})}
		</div>
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