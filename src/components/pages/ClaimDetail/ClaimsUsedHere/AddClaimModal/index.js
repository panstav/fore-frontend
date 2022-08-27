import { useCallback, useState } from 'preact/hooks';

import Component from './AddClaim';

export default function AddClaim({ direction, parentContent }) {

	const [claimType, setClaimType] = useState('new');
	const onChangeClaimType = useCallback((event) => {
		setClaimType(event.currentTarget.value, [setClaimType]);
	});

	const isNewClaim = claimType === 'new';

	const props = {
		direction, parentContent,
		isNewClaim,
		setClaimType: onChangeClaimType
	};

	return Component(props);
}