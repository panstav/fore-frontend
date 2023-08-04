import { FormProvider } from 'react-hook-form';

import useCustomForm from "hooks/use-custom-form";

export default function Form({ disableAutoFocus, onSubmit, children }) {

	const { ref, form } = useCustomForm({ autoFocus: !disableAutoFocus });

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