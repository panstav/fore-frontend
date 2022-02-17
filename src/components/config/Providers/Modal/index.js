import useModal from 'hooks/use-modal';

import Modal from 'wrappers/Modal';

import { ModalContext } from 'contexts';

import AddClaim from './AddClaim';

export default function ModalProvider({ children }) {

	const [addClaimModalProps, showAddClaimModal] = useModal({
		title: `You're claiming that:`
	});

	return <>
		<ModalContext.Provider value={{ showAddClaimModal }}>
			{children}
		</ModalContext.Provider>

		<Modal {...addClaimModalProps} render={AddClaim}/>
	</>;
}