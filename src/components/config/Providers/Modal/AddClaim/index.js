import { useFormContext, useWatch } from 'react-hook-form';
import { regExp as sanitizedRegExp } from 'lib/sanitize';

import Tooltip from 'wrappers/Tooltip';

import Checkbox from 'elements/Checkbox';

import AddClaimBody from "./AddClaimBody";
import Guidelines from './Guidelines';

export default function AddClaim({ control, copiedContent }) {
	return <>
		<div className="field">
			<div className="is-relative">
				<AddClaimBody {...{ copiedContent }} />
			</div>
		</div>
		<div style={{display:'none'}} className="field levem is-justify-content-start">
			<Tooltip
				content={"If you don't want to have your name beside it or if you don't mind letting someone who does."}>
				<label className="checkbox is-justify-content-flex-start levem">
					<Checkbox className="checkbox mr-1" name="isAnonymous" defaultValue={false} control={control} />
					Anonymous
				</label>
			</Tooltip>
		</div>
		<Guidelines />
		<div className="is-flex is-justify-content-space-between is-align-items-center">
			<div><EscapedContent /></div>
			<button className="button is-primary">Claim</button>
		</div>
	</>;
}

function EscapedContent() {
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

	return <p className="notification is-warning is-small my-0">
		<span>The following characters are not supported and will not be saved:</span>
		{escapedCharacters.map((character) => {
			return <span key={character} className="tag is-warning is-light ml-1">{character}</span>;
		})}
	</p>;
}