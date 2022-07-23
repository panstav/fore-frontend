import Section from 'wrappers/Section';

import SignupWithGoogle from 'elements/SignupWithGoogle';
import { Welcome } from 'elements/Icon';

export default function Login() {
	return <>
		<Section withTopMargin={true}>
			<div className="has-text-centered">

				<p className="mb-6">👋 <b>Fore</b> is only available in closed beta.</p>

				<SignupWithGoogle className="mb-6" />

				<div className="m-auto" style={{ maxWidth: '15rem' }}>
					<Welcome />
				</div>

			</div>
		</Section>
	</>;
}