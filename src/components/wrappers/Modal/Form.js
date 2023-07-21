import { useCallback, useEffect, useRef } from 'preact/compat';
import { useForm, FormProvider } from 'react-hook-form';

import Modal from './Modal';

export default function Form({ onSubmit, hideable, autoClose = true, hideModal: unsafeHideModal, render, title, ...modalProps }) {

	const ref = useRef(null);

	const form = useForm({
		shouldUseNativeValidation: true
	});

	const isClean = () => !Object.values(form.formState.dirtyFields).length;

	const hideModal = useCallback(() => {
		if (isClean() || confirm('Sure?')) return unsafeHideModal();
	}, [isClean()]);

	const handleSubmit = (...args) => {
		onSubmit(...args);
		if (autoClose) unsafeHideModal();
	};

	useEffect(() => {
		if (ref.current) {
			const inputElem = ref.current.querySelector('input, textarea');
			if (inputElem) inputElem.focus();
		}
	}, [ref.current]);

	return <FormProvider {...form}>
		<Modal {...{ title, hideModal, hideable }}>
			<form ref={ref} onSubmit={form.handleSubmit(handleSubmit)}>
				{render(Object.assign({ hideModal }, form, modalProps))}
			</form>
		</Modal>
	</FormProvider>;
}