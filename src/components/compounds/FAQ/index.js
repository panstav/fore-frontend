import classNames from 'classnames';

import qaPairs from './qaPairs';

export default function FAQ ({ big, className: classes }) {
	const wrapperClassName = classNames('content', classes);
	const titleClassName = classNames(big || 'is-size-6 mb-3');
	const contentWrapper = classNames(big || 'is-size-7');
	return <div className={wrapperClassName}>
		<h2 className={titleClassName}>{big ? 'Frequently Asked Questions' : 'FAQs'}:</h2>
		<div className={contentWrapper}>
			{qaPairs.map(({ question, answer }) => {
				return <details key={question} className="mb-2">
					<summary>{question}</summary>
					<p className='mt-2 mb-4'>{answer}</p>
				</details>;
			})}
		</div>
	</div>;
}