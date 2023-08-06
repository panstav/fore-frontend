import { useContext } from 'preact/hooks';
import { connect } from 'unistore/preact';

import Form from 'wrappers/Form';

import { SpaceDetailContext } from 'contexts';

import actions from './actions.js';

import Component from './DebateSpaceSetup.js';

export default connect(null, actions)(DebateSpaceSetup);

function DebateSpaceSetup({ setupDebateSpace }) {

	const { id: spaceId } = useContext(SpaceDetailContext);

	const onSubmit = ({ startTime, quarterLength }) => {
		setupDebateSpace({ spaceId, startTime, quarterLength });
	};

	const props = {
		onSubmit
	};

	return <Form {...props}>
		<Component />
	</Form>;

}