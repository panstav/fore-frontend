import ComponentWithForm from './Form';
import Component from './Modal';

export default function ModalWrapper({ render, onSubmit, hideModal, ...modalProps }) {

	if (!Object.keys(modalProps).length) return null;

	const renderContextTitle = () => {
		if (typeof modalProps.contextTitle === 'function') return modalProps.contextTitle(); else
		if (!modalProps.contextTitle) return null;
		return <span>{modalProps.contextTitle}</span>;
	};

	if (onSubmit) return <ComponentWithForm {...{ render, onSubmit, hideModal, renderContextTitle, ...modalProps }}/>;

	const props = {
		title: modalProps.title,
		hideModal, renderContextTitle,
		children: render({ hideModal, ...modalProps })
	};

	return Component(props);

}