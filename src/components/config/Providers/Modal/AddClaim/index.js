import AddClaimBody from "./AddClaimBody";
import Anonymous from './Anonymous';
import EscapedContent from './EscapedContent';
import Guidelines from './Guidelines';
import CurrentSpace from './CurrentSpace';

export default function AddClaim({ copiedContent }) {
	return <>
		<div className="fore-new-claim-body field p-2">
			<AddClaimBody {...{ copiedContent }} className="mb-2" />
			<Anonymous className="ml-1" />
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