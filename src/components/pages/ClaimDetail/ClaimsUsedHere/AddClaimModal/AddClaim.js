import NewClaimBody from "config/Providers/Modal/AddClaim";
import { Title, ContextTitle } from "wrappers/Modal";

import ExistingClaim from './ExistingClaim';

export default function AddClaimModal({ direction, parentContent, isNewClaim, setClaimType }) {

	return <>
		<ContextTitle>In {capitalize(direction)} of "<span className="clarity-mask">{parentContent}</span>"</ContextTitle>
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