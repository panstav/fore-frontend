import useModal from 'hooks/use-modal';

import Modal from 'wrappers/Modal';

import { ModalContext } from 'contexts';

import AddClaim from './AddClaim';
import AddSpace from './AddSpace';

export default function ModalProvider({ children }) {

	const [addClaimModalProps, showAddClaimModal] = useModal({ title: `You're claiming that:` });
	const [addSpaceModalProps, showAddSpaceModal] = useModal({ title: `Create a new Space` });

	return <>
		<ModalContext.Provider value={{ showAddClaimModal, showAddSpaceModal }}>
			{children}
		</ModalContext.Provider>

		<Modal {...addClaimModalProps} render={AddClaim}/>
		<Modal {...addSpaceModalProps} render={AddSpace}/>
	</>;
}