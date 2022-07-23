import classNames from "classnames";

import Section from "wrappers/Section";

import SignupWithGoogle from "elements/SignupWithGoogle";
import { Logo, IdeaAbstraction, Cooperation, Upgrade } from "elements/Icon";

const benefits = [
	{
		prompt: "Debate",
		title: "Discover stronger ideas",
		description: "Fore.is is a platform where debates are naturally constructive abd beneficial to all sides.",
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
		title: "Get rewarded for contributing and connecting Claims",
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
			<SignupWithGoogle className="mt-6" />
		</Section>
		<Section withTopMargin={true}>
			{benefits.map((benefit, index) => {
				return <SideBySide
					{...benefit}
					key={benefit.prompt}
					className={`is-flex-direction-row${index % 2 === 0 ? '' : '-reverse'}`}
				/>
			})}
		</Section>
		<Section withTopMargin={true} className="has-text-centered pt-6">
			<p className="has-text-weight-bold has-text-primary mb-4">Claim Truth</p>
			<SignupWithGoogle className="mb-6" />
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