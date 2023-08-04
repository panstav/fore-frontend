import { useEffect, useRef } from "preact/hooks";

import { useForm } from 'react-hook-form';

export default function useCustomForm({ autoFocus = true } = {}) {

	const ref = useRef(null);

	const form = useForm({
		shouldUseNativeValidation: true
	});

	const isClean = () => !Object.values(form.formState.dirtyFields).length;

	useEffect(() => {
		if (autoFocus && ref.current) {
			const inputElem = ref.current.querySelector('input, textarea');
			if (inputElem) inputElem.focus();
		}
	}, [ref]);

	return { ref, form, isClean };

}