import { useContext } from 'preact/hooks';

import useModal from 'hooks/use-modal.js';

import { ClaimDetailContext } from 'contexts.js';

import Component from './ClaimUsedAt.js';

export default function ClaimUsedAt() {

	const { usedAt } = useContext(ClaimDetailContext);

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