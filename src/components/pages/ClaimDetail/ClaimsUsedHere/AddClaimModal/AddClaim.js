import NewClaimBody from "config/Providers/Modal/AddClaim";
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

export default function AddClaimModal({ direction, parentContent, isNewClaim, setClaimType, askAi }) {
	const { titleChunk } = directedCopy[direction];

	return <>
		<ContextTitle>{`In ${capitalize(titleChunk)} "${parentContent}"`}</ContextTitle>
		<SelectNewOrExisting {...{ setClaimType }} />
		<hr />
		{isNewClaim
			? <>
				<Title>You&apos;re Claiming that:</Title>
				<NewClaimBody askAi={askAi} />
			</>
			: <ExistingClaim />}
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