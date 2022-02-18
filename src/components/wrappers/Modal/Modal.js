import { Close } from 'base/Icon';

import useEscape from 'hooks/use-escape.js';

export default function Modal({ title, contextTitle, hideModal, children }) {
	useEscape(hideModal);

	return <div className="modal is-active">
		<div className="modal-background" onClick={hideModal}/>
		<div className="modal-content">
			<div className="box is-relative p-0">
				<Close className="is-pulled-right m-1" onClick={hideModal} />
				<div className="box-inner">

					{contextTitle && <div className="has-text-grey-light has-text-weight-bold mb-3 text-wrap">{contextTitle}</div>}

					<div className="level is-mobile title is-4 has-text-grey">{title}</div>

					{children}
					
				</div>
			</div>
		</div>
	</div>;
}