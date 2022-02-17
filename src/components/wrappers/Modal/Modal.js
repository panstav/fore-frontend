import { Close } from 'base/Icon';

import useEscape from 'hooks/use-escape.js';

export default function Modal({ title, contextTitle, hideModal, children }) {
	useEscape(hideModal);

	return <div className="modal is-active">
		<div className="modal-background" onClick={hideModal}/>
		<div className="modal-content">
			<div className="box is-relative">
				{contextTitle && <div className="has-text-grey-light has-text-weight-bold mb-3 text-wrap">{contextTitle}</div> }
				<div className="level is-mobile title has-text-grey is-justify-content-space-between">
					<span>{title}</span>
					<Close onClick={hideModal}/>
				</div>
				{children}
			</div>
		</div>
	</div>;
}