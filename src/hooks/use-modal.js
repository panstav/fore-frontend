import { useCallback, useState } from 'preact/compat';

export default function useModal(propsFromHook = {}) {

	const [modalProps, setModalProps] = useState();
	const hideModal = () => {
		window.document.body.classList.toggle('with-modal', false);
		return setModalProps();
	};

	const showModal = useCallback((propsFromCallback = {}) => {
		const newProps = Object.assign({ hideModal },
			typeof propsFromHook === 'function'
				? propsFromHook(propsFromCallback)
				: Object.assign(propsFromHook, propsFromCallback)
		);
		window.document.body.classList.toggle('with-modal', true);
		setModalProps(newProps);
	}, [typeof propsFromHook]);

	return [modalProps, showModal, hideModal];
}