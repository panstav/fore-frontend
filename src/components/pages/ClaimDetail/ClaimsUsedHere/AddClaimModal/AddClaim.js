import NewClaimBody from "components/wrappers/Modal/modals/AddClaim";
import { Title, ContextTitle } from "wrappers/Modal";

import ExistingClaim from './ExistingClaim';

const directedCopy = {
	support: {
		titleChunk: 'Support of',
	},
	opposition: {
		titleChunk: 'Opposition to',
	}
};

export default function AddClaimModal({ direction, parentContent, isNewClaim, setClaimType }) {
	const { titleChunk } = directedCopy[direction];

	return <>
		<ContextTitle>{`In ${capitalize(titleChunk)} "${parentContent}"`}</ContextTitle>
		<SelectNewOrExisting {...{ setClaimType }} />
		<hr />
		{isNewClaim ? <NewClaim /> : <ExistingClaim />}
	</>;

}

function NewClaim() {
	return <>
		<Title>You&apos;re Claiming that:</Title>
		<NewClaimBody />
	</>;
}

function SelectNewOrExisting({ setClaimType }) {
	return <div className="select is-fullwidth is-outlined">
		<select onChange={setClaimType}>
			<option value="new">Create a new Claim</option>
			<option value="existing">Use an existing one</option>
		</select>
	</div>;
}

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}