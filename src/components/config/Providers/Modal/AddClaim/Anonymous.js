import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

import useModal from 'hooks/use-modal';

import Modal, { Title } from 'wrappers/Modal';

import Checkbox from 'elements/Checkbox';
import { Info } from 'elements/Icon';

export default function Anonymous({ className: classes }) {

	const { control } = useFormContext();

	const [whatsAnonModalProps, showWhatsAnonModal] = useModal();

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
					<p>If for some reason you prefer not to be associated with a particular Claim, you can Claim it anonymously.</p>
					<p>Unlike regular Claims, others cannot know who the original author of the Claim is, and you cannot reuse an anonymous Claim to support or oppose other Claims on Fore, but anyone can &quot;pick it up&quot;, Claim it as their own, and reuse it anywhere.</p>
					<p><span className='has-text-weight-bold'>Note:</span> Even if someone picks up your anonymous Claim - the system will remember you as the original author. This will be very useful in the future when earnings are enabled.</p>
				</div>
				<div className='is-flex is-justify-content-end'>
					<button onClick={hideModal} className="button is-primary">OK</button>
				</div>
			</>;
		}} />
	</>;
}