import Section from 'wrappers/Section';

import {Google as Icon} from 'base/Icon';

export default function Login({ authViaGoogleUrl }) {
	return <>
		<Section withTopMargin={true}>
			<div className="has-text-centered">

				<p className="mb-6">👋 <b>Fore</b> is only availble in closed beta.</p>

				<a className="button px-3" href={authViaGoogleUrl}>
					<Icon className="m-auto" />
					<span className="ml-3">Sign in with Google</span>
				</a>

			</div>
		</Section>
	</>;
}