import classNames from "classnames";

const guidelines = [
	'Be respectful, factual and concise.',
	'You will be able to use this Claim to support or oppose any other Claim. Try to phrase it in a way that will make sense no matter where it is displayed.',
	'Once your Claim is published - it cannot be modified, But you have the option to delete it at any time. The same is true for any Claim that you choose to support or oppose.'
];

export default function Guidelines() {
	return <details className="notification is-primary-light py-2 px-4">
		<summary className='has-text-weight-bold' style={{ marginLeft: '-0.2rem' }}>
			<span className='ml-1'>Guidelines</span>
		</summary>
		<div className="content">
			<ul className='ml-4'>
				{guidelines.map((guideline, index) => {
					const className = classNames('is-fullwidth', guidelines.length - 1 !== index && 'mb-4');
					return <li key={guideline} {...{ className }}>
						{guideline}
					</li>;
				})}
			</ul>
		</div>
	</details>;
}