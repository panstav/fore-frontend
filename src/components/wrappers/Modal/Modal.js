import noop from '../../../../lib/noop';

import { Close } from 'components/elements/Icon';

import useEscape from 'hooks/use-escape.js';

export default function Modal({ title, hideModal, children, hideable = true }) {

	if (!hideable) hideModal = noop;

	useEscape(hideModal);

	return <div className="modal is-active">
		<div className="modal-background" onClick={hideModal}/>
		<div className="modal-content is-relative">
			<div className="box p-0" style={{ maxHeight: '100%', overflow: 'scroll' }}>

				{hideable && <Close className="is-overlay" style={{ left: 'unset' }} onClick={hideModal} /> }
				<div className="box-inner">

					{title && <Title>{title}</Title>}
					{children}

				</div>

			</div>
		</div>
	</div>;
}

export function Title ({ children }) {
	return <div className="level is-mobile title is-4 has-text-grey">{children}</div>;
}

export function ContextTitle ({ children }) {
	return <div className="has-text-grey-light has-text-weight-bold mb-3 text-wrap">
		{children}
	</div>;
}