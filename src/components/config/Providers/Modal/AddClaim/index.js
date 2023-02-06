import { connect } from "unistore/preact"

import TrimmedInput from "elements/TrimmedInput";

import Anonymous from './Anonymous';
import EscapedContent from './EscapedContent';
import Guidelines from './Guidelines';
import CurrentSpace from './CurrentSpace';

const Connector = connect(mapStateToProps)(AddClaim);

// export a simple function instead of a connect() invocation
export default ({ copiedContent }) => {
	return <Connector copiedContent={copiedContent} />;
};

function AddClaim({ isntPrivateSpace, copiedContent }) {
	const textAreaClasses = isntPrivateSpace ? 'mb-2' : null;
	return <>
		<div className="fore-new-claim-body field p-2">
			<TrimmedInput name="content" type="textarea" maxLength={240} defaultValue={copiedContent} className={textAreaClasses} inputClasses="pb-5" />
			{isntPrivateSpace && <Anonymous className="ml-1" />}
		</div>
		<EscapedContent />
		{isntPrivateSpace && <Guidelines />}
		<div className="is-flex is-justify-content-end">
			<button className="button is-primary">
				<span>Claim on&nbsp;</span>
				<CurrentSpace />
			</button>
		</div>
	</>;
}

function mapStateToProps({ spaces }) {
	const isntPrivateSpace = spaces.find(space => space.isCurrent)?.type !== 'private';
	return {
		isntPrivateSpace
	};
}