import { Link } from "wouter-preact";
import classNames from "classnames";

import Section from "wrappers/Section";

import FAQ from "compounds/FAQ";
import CurrentFeatures from "compounds/CurrentFeatures";

import { Logo, IdeaAbstraction, Cooperation, Upgrade } from "elements/Icon";

import { meta } from "constants.js";

const benefits = [
	{
		prompt: "Debate",
		title: "Let the best ideas shine forth",
		description: "Debates on Fore are naturally constructive and insightful.",
		illustration: IdeaAbstraction
	},
	{
		prompt: "Organize",
		title: "Next level group thinking",
		description: "A dedicated space for your group will create a deeper sense of certainty.",
		illustration: Cooperation
	},
	{
		prompt: "Earn",
		title: "Get rewarded for creating meaningful Claims",
		description: "Creating a strong incentive to stand for truth is a major milestone on Fore's timeline. We're expecting unforeseeable results.",
		illustration: Upgrade
	}
];

export default function PromotionalHomepage () {
	return <>
		<Section className="has-text-centered">
			<Logo className="mt-5" style={{ width: '10rem', height: '10rem' }} />
			<h1 className="title is-1 mt-6" style={{ letterSpacing: '0.05em' }}>Fore</h1>
			<p className="has-text-weight-bold has-text-primary">{meta.description}</p>
			<SignupCTA whatFor="to get started." className="mt-6" />
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
		<Section className="is-medium">
			<FAQ />
		</Section>
		<Section>
			<CurrentFeatures />
		</Section>
		<Section>
			<div className="has-text-centered mt-6 mb-5">
				<p className="has-text-weight-bold has-text-primary mb-3">Claim Truth</p>
				<SignupCTA whatFor="to receive updates." className="mt-5" />
			</div>
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