import classNames from "classnames";

const guidelines = [
	'Be respectful. Be factual. Be concise.',
	'You can later reuse this Claim to support or oppose any other Claim, so try to articulate it in a way that makes sense regardless of where it is displayed.',
	'Once your Claim is published it cannot be edited but you can choose to delete it at any time. The same applies to any Claim you choose to support / oppose to.'
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