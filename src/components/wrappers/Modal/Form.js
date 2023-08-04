import { useCallback } from 'preact/compat';

import { FormProvider } from 'react-hook-form';

import useCustomForm from 'hooks/use-custom-form';

import Modal from './Modal';

export default function Form({ onSubmit, hideable, autoClose = true, hideModal: unsafeHideModal, render, title, ...modalProps }) {

	const { ref, form, isClean } = useCustomForm();

	const hideModal = useCallback(() => {
		if (isClean() || confirm('Sure?')) return unsafeHideModal();
	}, [isClean()]);

	const handleSubmit = (...args) => {
		onSubmit(...args);
		if (autoClose) unsafeHideModal();
	};

	return <FormProvider {...form}>
		<Modal {...{ title, hideModal, hideable }}>
			<form ref={ref} onSubmit={form.handleSubmit(handleSubmit)}>
				{render(Object.assign({ hideModal }, form, modalProps))}
			</form>
		</Modal>
	</FormProvider>;
}