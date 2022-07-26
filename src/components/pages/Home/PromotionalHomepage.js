import { Link } from "wouter-preact";

import classNames from "classnames";

import SignupForBetaUpdates from "compounds/SignupForBetaUpdates";

import Section from "wrappers/Section";
import Access from "wrappers/Access";

import SignupWithGoogle from "elements/SignupWithGoogle";
import { Logo, IdeaAbstraction, Cooperation, Upgrade } from "elements/Icon";

import { roles } from "constants.js";

const benefits = [
	{
		prompt: "Debate",
		title: "Discover stronger ideas",
		description: "Fore.is is a platform where debates are naturally constructive and beneficial to all sides.",
		illustration: IdeaAbstraction
	},
	{
		prompt: "Organize",
		title: "Create a private space and empower group thinking",
		description: "A space for your cooperation instantly raises awareness and allows a greater sense of consensus.",
		illustration: Cooperation
	},
	{
		prompt: "Earn",
		title: "Contribute and connect Claims to get rewarded",
		description: "We built Fore believing that a strong incentive for constructive debating will bring about unforeseeable benefits.",
		illustration: Upgrade
	}
];

export default function PromotionalHomepage () {
	return <>
		<Section className="has-text-centered">
			<Logo className="mt-5" style={{ width: '10rem', height: '10rem' }} />
			<h1 className="title is-1 mt-6">Fore</h1>
			<p className="has-text-weight-bold has-text-primary">Where collaborative truth-seeking happens.</p>
			<Access minimum={roles.order[1]}
				onFail={() => <SignupWithGoogle className="mt-6" />}
			>
				<Link className="button is-primary mt-5" to="/support">Support the Closed Beta</Link>
			</Access>
		</Section>
		<Section withTopMargin={true}>
			{benefits.map((benefit, index) => {
				return <SideBySide
					{...benefit}
					key={benefit.prompt}
					className={`is-flex-direction-row${index % 2 === 0 ? '' : '-reverse'}`}
				/>;
			})}
		</Section>
		<Section withTopMargin={true} className="pt-6">
			<Access minimum={roles.order[1]}
				onFail={() => <div className="has-text-centered mt-6 mb-5">
					<p className="has-text-weight-bold has-text-primary mb-3">Claim Truth</p>
					<SignupWithGoogle />
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
			<h2 className="title is-2 mb-3">{title}</h2>
			<p>{description}</p>
		</div>
		<div>
			<Illustration />
		</div>
	</div>;
}