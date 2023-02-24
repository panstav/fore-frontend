import { useFormContext } from 'react-hook-form';
import { useCallback, useState } from 'preact/compat';
import { connect } from 'unistore/preact';

import AddClaimTemplate from './AddClaim';

import actions from './actions';

// export a simple function instead of a connect() invocation
// to avoid mishaps with the Modal component's render function
const Component = connect(mapStateToProps, actions)(AddClaim);
export default function AddClaimRender(props) {
	return <Component {...props} />;
}

function AddClaim({ direction, parentContent, aiClaimSO, aiResponse }) {

	const [claimType, setClaimType] = useState('new');
	const isNewClaim = claimType === 'new';

	const onChangeClaimType = useCallback((event) => {
		setClaimType(event.currentTarget.value);
	}, [setClaimType]);

	const { setValue, getValues } = useFormContext();
	const isPristine = !getValues('content');

	if (isNewClaim && isPristine && aiResponse) setValue('content', aiResponse);

	const props = {
		direction, parentContent,
		isNewClaim,
		setClaimType: onChangeClaimType,
		askAi: isNewClaim && isPristine && handleAskAi
	};

	return AddClaimTemplate(props);

	function handleAskAi(event) {
		event.preventDefault();
		aiClaimSO({ direction, parentContent });
	}

}

function mapStateToProps({ ai }) {
	return {
		aiResponse: ai.claim
	};
}