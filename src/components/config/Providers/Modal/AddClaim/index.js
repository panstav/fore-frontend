import { connect } from "unistore/preact";

import TrimmedInput from "elements/TrimmedInput";

import Anonymous from './Anonymous';
import EscapedContent from './EscapedContent';
import Guidelines from './Guidelines';
import CurrentSpace from './CurrentSpace';

const Component = connect(mapStateToProps)(AddClaim);

// export a simple function instead of a connect() invocation
export default function AddClaimRender({ copiedContent }) {
	return <Component copiedContent={copiedContent} />;
}

function AddClaim({ isPrivateSpace, copiedContent }) {
	const textAreaClasses = isPrivateSpace ? null : 'mb-2';
	return <>
		<div className="fore-new-claim-body field p-2">
			<TrimmedInput name="content" type="textarea" maxLength={240} defaultValue={copiedContent} className={textAreaClasses} inputClasses="pb-5" />
			<Anonymous isAvailable={!isPrivateSpace} className="ml-1" />
		</div>
		<EscapedContent />
		{isPrivateSpace || <Guidelines />}
		<div className="is-flex is-justify-content-end">
			<button className="button is-primary">
				<span>Claim on&nbsp;</span>
				<CurrentSpace />
			</button>
		</div>
	</>;
}

function mapStateToProps({ spaces }) {
	const isPrivateSpace = spaces.find(space => space.isCurrent)?.type === 'private';
	return {
		isPrivateSpace
	};
}