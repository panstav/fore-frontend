import { FormProvider } from 'react-hook-form';

import useCustomForm from "hooks/use-custom-form";

export default function Form({ disableAutoFocus, defaultValues, onSubmit, children }) {

	const { ref, form } = useCustomForm({ autoFocus: !disableAutoFocus, defaultValues });

	const formProps = {
		ref,
		onSubmit: form.handleSubmit(onSubmit)
	};

	return <FormProvider {...form}>
		<form {...formProps}>
			{children}
		</form>
	</FormProvider>;

}