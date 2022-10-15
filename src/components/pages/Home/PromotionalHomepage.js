import { Link } from "wouter-preact";
import classNames from "classnames";

import Section from "wrappers/Section";
import Access from "wrappers/Access";

import SignupForBetaUpdates from "compounds/SignupForBetaUpdates";
import CurrentFeatures from "compounds/CurrentFeatures";

import { Logo, IdeaAbstraction, Cooperation, Upgrade } from "elements/Icon";

import { roles } from "constants.js";

const benefits = [
	{
		prompt: "Organize",
		title: "Empower group thinking with private spaces",
		description: "A dedicated space for your organization instantly raises certainty and allows a greater sense of consensus.",
		illustration: Cooperation
	},
	{
		prompt: "Debate",
		title: "Discover stronger ideas",
		description: "Fore.is is a platform where debates are naturally constructive and beneficial to all sides.",
		illustration: IdeaAbstraction
	},
	{
		prompt: "Earn",
		title: "Get rewarded for creating and connecting meaningful Claims",
		description: "We built Fore believing that a strong incentive for constructive debating will bring about unforeseeable benefits.",
		illustration: Upgrade
	}
];

export default function PromotionalHomepage () {
	return <>
		<Section className="has-text-centered">
			<Logo className="mt-5" style={{ width: '10rem', height: '10rem' }} />
			<h1 className="title is-1 mt-6" style={{ letterSpacing: '0.05em' }}>Fore</h1>
			<p className="has-text-weight-bold has-text-primary">Where collaborative truth-seeking happens.</p>
			<Access minimum={roles.order[1]}
				onFail={() => <SignupCTA whatFor="to get started." className="mt-6" />}
			>
				<Link className="button is-primary mt-5" to="/support">Support the Closed Beta</Link>
			</Access>
		</Section>
		<Section>
			{benefits.map((benefit, index) => {
				return <SideBySide
					{...benefit}
					key={benefit.prompt}
					className={`is-flex-direction-row${index % 2 === 0 ? '' : '-reverse'}`}
				/>;
			})}
		</Section>
		<Section withTopMargin={false} className="pt-6">
			<CurrentFeatures />
		</Section>
		<Section>
			<Access minimum={roles.order[1]}
				onFail={() => <div className="has-text-centered mt-6 mb-5">
					<p className="has-text-weight-bold has-text-primary mb-3">Claim Truth</p>
					<SignupCTA whatFor="to receive updates." className="mt-5" />
				</div>}
			>
				<div className="box">
					<SignupForBetaUpdates />
				</div>
				<p className="has-text-centered has-text-grey-lighter mb-4">Claim Truth</p>
			</Access>
		</Section>
	</>;
}

function SideBySide({ prompt, title, description, illustration: Illustration, className }) {
	const classes = classNames('side-by-side', 'is-justify-content-space-between', 'is-align-items-center', 'mt-6 pt-6', className);
	return <div className={classes}>
		<div>
			<span className="has-text-primary-light has-text-weight-bold mb-1 is-block">{prompt}</span>
			<h2 className="title is-2 mb-3" style={{ hyphens: 'auto' }}>{title}</h2>
			<p>{description}</p>
		</div>
		<div>
			<Illustration />
		</div>
	</div>;
}

function SignupCTA ({ className, whatFor }) {
	const classes = classNames('is-flex is-justify-content-center is-align-items-center', className);
	return <div className={classes}>
		<Link className="button is-primary mr-2" to="/connect?signup">Sign up</Link>
		<span> {whatFor}</span>
	</div>;
}