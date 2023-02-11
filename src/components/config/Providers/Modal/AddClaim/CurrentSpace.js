import { connect } from "unistore/preact";

import { Logo, PrivateSpace, SharedSpace } from 'elements/Icon';

const iconsByType = {
	private: {
		Icon: PrivateSpace,
		transform: 'scale(1.75)'
	},
	shared: {
		Icon: SharedSpace,
		transform: 'translate(1px, 1px)'
	},
	public: {
		Icon: Logo,
		transform: ''
	}
};

export default connect(mapStateToProps)(CurrentSpace);

function CurrentSpace({ name, type }) {
	const { Icon, transform } = iconsByType[type];
	if (!name) return null;
	return <>
		<Icon className="ml-1 mr-1" style={{ width: '1em', transform }} />
		<span>{name}</span>
	</>;
}

function mapStateToProps({ spaces }) {
	const { name, type } = spaces.find(({ isCurrent }) => isCurrent);
	return { name, type };
}