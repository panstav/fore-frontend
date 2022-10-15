import ComponentWithForm from './Form';
import Component, { Title, ContextTitle } from './Modal';

export { Title, ContextTitle };

export default function ModalWrapper({ render, onSubmit, hideModal, ...modalProps }) {

	if (!Object.keys(modalProps).length) return null;

	if (onSubmit) return <ComponentWithForm {...{ render, onSubmit, hideModal, ...modalProps }}/>;

	const props = {
		title: modalProps.title,
		hideModal,
		children: render({ hideModal, ...modalProps })
	};

	return Component(props);

}