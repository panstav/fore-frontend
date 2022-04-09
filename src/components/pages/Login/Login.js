import Section from 'wrappers/Section';

import {Google} from 'base/Icon';

export default function Login({ authViaGoogleUrl }) {
	return <>
		<Section withTopMargin={true}>

			<div className="box m-auto mt-6" style={{ maxWidth: '500px' }}>
				<h1 className="title">Hey 👋</h1>

				<p className="mb-6">Fore is availble in closed beta.<br/>Sign in to enter waiting list.</p>

				<div className="has-text-centered">
					<a className="button px-3" href={authViaGoogleUrl}>
						<Google className="m-auto" />
						<span className="ml-3">Sign in with Google</span>
					</a>
				</div>
			</div>

		</Section>
	</>;
}