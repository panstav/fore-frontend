import { connect } from 'unistore/preact';
import { useForm } from 'react-hook-form';

import useBooleanState from 'hooks/use-boolean-state';

import actions from './actions.js';

import Component from './SignupForBetaUpdates.js';

export default connect(null, actions)(SignupForBetaUpdates);

function SignupForBetaUpdates({ signUser }) {

	const { control, handleSubmit } = useForm();

	const [didSendWithoutMarking, setNothingMarked, resetErrorMessage] = useBooleanState(false);
	const [successfullySignedUpForUpdates, showSuccessNotification] = useBooleanState(false);

	const onSubmit = handleSubmit(({ notifyWhenOpenBeta, notifyOtherContibutionOptions }) => {
		resetErrorMessage();
		if (!notifyWhenOpenBeta && !notifyOtherContibutionOptions) return setNothingMarked();

		signUser({ notifyWhenOpenBeta, notifyOtherContibutionOptions });
		showSuccessNotification();
	});

	const props = {
		control,
		onSubmit,
		didSendWithoutMarking,
		successfullySignedUpForUpdates
	};

	return Component(props);

}