import TrimmedInput from "elements/TrimmedInput";

import Anonymous from './Anonymous';
import EscapedContent from './EscapedContent';
import Guidelines from './Guidelines';
import CurrentSpace from './CurrentSpace';

export default function AddClaim({ isAnonymousAvailable, isDisplayingGuidelines, copiedContent }) {
	const textAreaClasses = isAnonymousAvailable ? 'mb-2' : null;

	return <>
		<div className="fore-new-claim-body field p-2">
			<TrimmedInput name="content" type="textarea" maxLength={240} defaultValue={copiedContent} className={textAreaClasses} inputClasses="pb-5" />
			<Anonymous isAvailable={isAnonymousAvailable} className="ml-1" />
		</div>
		<EscapedContent />
		{isDisplayingGuidelines && <Guidelines />}
		<div className="is-flex is-justify-content-end">
			<button className="button is-primary">
				<span>Claim on&nbsp;</span>
				<CurrentSpace />
			</button>
		</div>
	</>;
}