import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

import useModal from 'hooks/use-modal';

import Modal, { Title } from 'wrappers/Modal';

import Checkbox from 'elements/Checkbox';
import { Info } from 'elements/Icon';

export default function Anonymous({ isAvailable, className: classes }) {

	const { control } = useFormContext();

	const [whatsAnonModalProps, showWhatsAnonModal] = useModal();

	if (!isAvailable) return <Checkbox className="is-hidden" name="isAnonymous" defaultValue={false} />;

	const className = classNames('field is-flex', classes);

	return <>
		<div {...{ className }}>
			<label>
				<Checkbox className="mr-1" name="isAnonymous" defaultValue={false} control={control} />
				Anonymous
			</label>
			<Info onClick={showWhatsAnonModal} className="ml-2" style={{ width: '1rem' }} />
		</div>

		<Modal {...whatsAnonModalProps} render={function WhatsAnonModal ({ hideModal }) {
			return <>
				<Title>Anonymous Claims</Title>
				<div className="content">
					<p>Claim anonymously to avoid being associated to it.</p>
					<p>Unlike regular Claims: The author of an anonymous Claim will remain unknown. As long as a Claim is anonymous it cannot be reused to support or oppose any other Claim. Anyone can &quot;pick up&quot; an anonymous Claim, Claim it as their own and then be able to use it anywhere.</p>
					<p><span className='has-text-weight-bold'>Note:</span> When earnings are enabled, you could be rewarded for Claims that were created anonymously, as well.</p>
				</div>
				<div className='is-flex is-justify-content-end'>
					<button onClick={hideModal} className="button is-primary">OK</button>
				</div>
			</>;
		}} />
	</>;
}