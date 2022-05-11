import { useCallback, useEffect, useRef } from 'preact/compat';
import { useForm, FormProvider } from 'react-hook-form';

import Modal from './Modal';

export default function Form({ onSubmit, hideable, autoClose = true, hideModal: unsafeHideModal, render, title, renderContextTitle, ...modalProps }) {

	const ref = useRef(null);

	const form = useForm({
		shouldUseNativeValidation: true
	});

	const hideModal = useCallback(() => {
		if (!Object.values(form.formState.dirtyFields).length || confirm('Sure?')) return unsafeHideModal();
	}, [Object.values(form.formState.dirtyFields).length]);

	const handleSubmit = (...args) => {
		onSubmit(...args);
		if (autoClose) unsafeHideModal();
	};

	useEffect(() => {
		if (ref.current) ref.current.querySelector('input, textarea').focus();
	}, [ref]);

	return <FormProvider {...form}>
		<Modal {...{ title, renderContextTitle, hideModal, hideable }}>
			<form ref={ref} onSubmit={form.handleSubmit(handleSubmit)}>
				{render(Object.assign({}, form, modalProps))}
			</form>
		</Modal>
	</FormProvider>;
}