import Section from 'wrappers/Section';

import { Google, Welcome } from 'base/Icon';

export default function Login({ authViaGoogleUrl }) {
	return <>
		<Section withTopMargin={true}>
			<div className="has-text-centered">

				<p className="mb-6">👋 <b>Fore</b> is only available in closed beta.</p>

				<a className="button px-3 mb-6" href={authViaGoogleUrl}>
					<Google className="m-auto" />
					<span className="ml-3">Sign in with Google</span>
				</a>

				<div className="m-auto" style={{ maxWidth: '15rem' }}>
					<Welcome />
				</div>

			</div>
		</Section>
	</>;
}