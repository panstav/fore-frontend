import { connect } from "unistore/preact";
import { useFormContext } from "react-hook-form";

import TrimmedInput from "elements/TrimmedInput";
import { Magic } from "elements/Icon";

import Anonymous from './Anonymous';
import EscapedContent from './EscapedContent';
import Guidelines from './Guidelines';
import CurrentSpace from './CurrentSpace';

// export a simple function instead of a connect() invocation
// to avoid mishaps with the Modal component's render function
const Component = connect(mapStateToProps)(AddClaim);
export default function AddClaimRender({ copiedContent, askAi }) {
	return <Component copiedContent={copiedContent} askAi={askAi} />;
}

function AddClaim({ isntPrivateSpace, copiedContent, askAi }) {
	const textAreaClasses = isntPrivateSpace ? 'mb-2' : null;
	return <>
		<div className="fore-new-claim-body field p-2">
			<div className="is-relative">
				{askAi && <div style={{ position: 'absolute', top: '1px', right: '1px', zIndex: 1 }}>
					<button onClick={askAi} className="button is-borderless">
						<Magic  />
					</button>
				</div>}
				<TrimmedInput name="content" type="textarea" maxLength={240} defaultValue={copiedContent} className={textAreaClasses} inputClasses="pb-5" />
			</div>
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