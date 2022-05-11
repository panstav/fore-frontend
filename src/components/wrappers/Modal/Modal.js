import noop from '../../../../lib/noop';

import { Close } from 'base/Icon';

import useEscape from 'hooks/use-escape.js';

export default function Modal({ title, renderContextTitle, hideModal, children, hideable = true }) {

	if (!hideable) hideModal = noop;

	useEscape(hideModal);

	return <div className="modal is-active">
		<div className="modal-background" onClick={hideModal}/>
		<div className="modal-content">
			<div className="box is-relative p-0">
				{ hideable && <Close className="is-pulled-right m-1" onClick={hideModal} /> }
				<div className="box-inner">

					<div className="has-text-grey-light has-text-weight-bold mb-3 text-wrap">
						{renderContextTitle()}
					</div>

					<div className="level is-mobile title is-4 has-text-grey">{title}</div>

					{children}

				</div>
			</div>
		</div>
	</div>;
}