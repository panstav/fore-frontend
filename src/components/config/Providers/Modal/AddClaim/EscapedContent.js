import { useFormContext, useWatch } from 'react-hook-form';

import { regExp as sanitizedRegExp } from 'lib/sanitize';

export default function EscapedContent() {
	const { control, getValues } = useFormContext();
	useWatch({ control, name: 'content' });

	const content = getValues('content') || '';
	if (!content) return null;

	// check copiedContent works
	const escapedCharacters = Array.from(content.matchAll(sanitizedRegExp))
		.map((match) => match[0])
		.reduce((accu, character) => {
			if (!accu.includes(character)) accu.push(character);
			return accu;
		}, []);

	if (!escapedCharacters.length) return null;

	return <p className="notification is-warning is-small">
		<span className='mr-2'>The following characters are not supported and will not be saved:</span>
		{escapedCharacters.map((character) => {
			return <span key={character} className="tag is-warning is-light has-text-weight-bold ml-1" style={{ width: '1.5ch' }}>{character}</span>;
		})}
	</p>;
}