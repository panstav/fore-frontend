import { connect } from "unistore/preact";

import { Logo } from 'elements/Icon';

export default connect(mapStateToProps)(CurrentSpace);

function CurrentSpace({ spaceName }) {
	if (!spaceName) return null;
	return <>
		<span>on</span>
		<Logo className="ml-2 mr-1" style={{ width: '1em' }} />
		<span className="clarity-mask">{spaceName}</span>
	</>;
}

function mapStateToProps({ spaces }) {
	const { name: spaceName } = spaces.find(({ isCurrent }) => isCurrent);
	return { spaceName };
}