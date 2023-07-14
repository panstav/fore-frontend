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
					<p>If for some reason you prefer to not be associated with this Claim, you can Claim it anonymously.</p>
					<p>Unlike regular Claims: The original author of an anonymous Claim is hidden. As long as a Claim is anonymous it cannot be reused to support or oppose any other Claims. Anyone can &quot;pick up an anonymous Claim&quot;, Claim it as their own to be able to use it anywhere.</p>
					<p><span className='has-text-weight-bold'>Note:</span> Even if someone picks up a Claim you created anonymously - the system will internally remember you as its original author. This will be very useful in the future when earnings are enabled.</p>
				</div>
				<div className='is-flex is-justify-content-end'>
					<button onClick={hideModal} className="button is-primary">OK</button>
				</div>
			</>;
		}} />
	</>;
}