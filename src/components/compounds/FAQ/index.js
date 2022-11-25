import qaPairs from './qaPairs';

export default function FAQ () {
	return <div className='box content'>
		<h2 className='block'>Frequently Asked Questions</h2>
		{qaPairs.map(({ question, answer }) => {
			return <details key={question} className="block">
				<summary>{question}</summary>
				<p className='mt-2'>{answer}</p>
			</details>;
		})}
	</div>;
}