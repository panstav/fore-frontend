import Tooltip from 'wrappers/Tooltip';

import Checkbox from 'base/Checkbox';

import AddClaimBody from "./AddClaimBody";

export default function AddClaim({ control}) {
	return <>
		<div className="field">
			<div className="is-relative">
				<AddClaimBody />
			</div>
		</div>
		<div style={{display:'none'}} className="field levem is-justify-content-start">
			<Tooltip
				content={"If you don't want to have your name beside it or if you don't mind letting someone who does."}>
				<label className="checkbox is-justify-content-flex-start levem">
					<Checkbox className="checkbox mr-1" name="isAnonymous" defaultValue={false} control={control} />
					Anonymous
				</label>
			</Tooltip>
		</div>
		<div className="is-flex is-justify-content-end">
			<button className="button is-primary">Claim</button>
		</div>
	</>;
}