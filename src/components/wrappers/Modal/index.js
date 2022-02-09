import ComponentWithForm from './Form';
import Component from './Modal';

export default function ModalWrapper({ render, onSubmit, hideModal, ...modalProps }) {

	if (!Object.keys(modalProps).length) return null;

	if (onSubmit) return <ComponentWithForm {...{ render, onSubmit, hideModal, ...modalProps }}/>;

	return <Component {...{ title: modalProps.title, hideModal, children: render(modalProps) }}/>;

}