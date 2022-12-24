import AddClaimBody from "./AddClaimBody";
import Anonymous from './Anonymous';
import EscapedContent from './EscapedContent';
import Guidelines from './Guidelines';
import CurrentSpace from './CurrentSpace';

export default function AddClaim({ copiedContent }) {
	return <>
		<div className="field">
			<div className="is-relative">
				<AddClaimBody {...{ copiedContent }} />
			</div>
		</div>
		<Anonymous />
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