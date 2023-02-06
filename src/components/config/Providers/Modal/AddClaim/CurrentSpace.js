import { connect } from "unistore/preact";

import { Logo } from 'elements/Icon';

export default connect(mapStateToProps)(CurrentSpace);

function CurrentSpace({ spaceName }) {
	if (!spaceName) return null;
	return <>
		<Logo className="ml-1 mr-1" style={{ width: '1em' }} />
		<span>{spaceName}</span>
	</>;
}

function mapStateToProps({ spaces }) {
	const { name: spaceName } = spaces.find(({ isCurrent }) => isCurrent);
	return { spaceName };
}