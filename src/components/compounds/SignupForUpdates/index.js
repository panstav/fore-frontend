import { connect } from 'unistore/preact';
import { useForm, useWatch } from 'react-hook-form';

import useBooleanState from 'hooks/use-boolean-state';

import actions from './actions.js';

import Component from './SignupForUpdates.js';

export default connect(null, actions)(SignupForUpdates);

function SignupForUpdates({ signUser, className }) {

	const { control, handleSubmit, getValues, setValue } = useForm();

	const [didSendWithoutMarking, setNothingMarked, resetErrorMessage] = useBooleanState(false);
	const [isMinorUpdatesDisabled, , , toggleMinorUpdatesDisability] = useBooleanState(false);
	const [successfullySignedUpForUpdates, showSuccessNotification] = useBooleanState(false);

	useWatch({ control, name: 'notifyWhenMajorUpdates' });
	const currentState = getValues("notifyWhenMajorUpdates");
	toggleMinorUpdatesDisability(!currentState);
	if (!currentState) setValue('notifyWhenMinorUpdates', false);

	const onSubmit = handleSubmit(({ notifyWhenMajorUpdates, notifyWhenMinorUpdates }) => {
		resetErrorMessage();
		if (!notifyWhenMajorUpdates) return setNothingMarked();

		signUser({ notifyWhenMajorUpdates, notifyWhenMinorUpdates });
		showSuccessNotification();
	});

	const props = {
		control,
		onSubmit,
		didSendWithoutMarking,
		successfullySignedUpForUpdates,
		className,
		isMinorUpdatesDisabled
	};

	return Component(props);

}