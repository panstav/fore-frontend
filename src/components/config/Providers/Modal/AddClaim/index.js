import Tooltip from 'wrappers/Tooltip';

import Checkbox from 'elements/Checkbox';

import AddClaimBody from "./AddClaimBody";
import EscapedContent from './EscapedContent';
import Guidelines from './Guidelines';
import CurrentSpace from './CurrentSpace';

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
		<EscapedContent />
		<Guidelines />
		<div className="is-flex is-justify-content-end">
			<button className="button is-primary">
				<span>Claim&nbsp;</span>
				<CurrentSpace />
			</button>
		</div>
	</>;
}