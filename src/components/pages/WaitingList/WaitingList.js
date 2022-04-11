import Section from 'wrappers/Section';

export default function WaitingList() {
	return <Section withTopMargin={true}>

		<div className="box m-auto mt-6" style={{ maxWidth: '500px' }}>
			<h1 className="title">Fore is still in closed beta.</h1>
			<p className="mb-6">We&apos;re slowly opening up, you are in the waiting list.</p>
		</div>

	</Section>;
}