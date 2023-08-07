import useModal from 'hooks/use-modal.js';

import Component from './ClaimUsedAt.js';

export default function ClaimUsedAt({ usedAt }) {

	const [usedAtModalProps, showUsedInModal] = useModal(({ direction, claims }) => ({
		title: `Used in ${direction}`,
		claims
	}));

	const showUsedAt = (direction) => () => {
		const claims = usedAt[direction];
		if (claims.length) showUsedInModal({ direction, claims });
	};

	const props = {
		usedAt,
		showUsedAt, usedAtModalProps
	};

	return Component(props);
}