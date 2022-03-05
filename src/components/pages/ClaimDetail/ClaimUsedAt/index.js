import { connect } from 'unistore/preact';

import pick from 'lodash.pick';

import withContext from 'lib/with-context';

import useModal from 'hooks/use-modal.js';

import { ClaimDetailContext } from 'contexts.js';

import Component from './ClaimUsedAt.js';

import { claimsUse } from 'constants';

export default withContext({
	context: ClaimDetailContext,
	map: ({ id }) => ({ currentId: id }),
	component: connect(mapStateToProps)(ClaimUsedAt)
});

function ClaimUsedAt({ usedAt }) {

	const [usedAtModalProps, showUsedInModal] = useModal(({ direction, claims }) => ({
		title: `Used in ${claimsUse[direction]}`,
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

function mapStateToProps({ claims }, { currentId }) {
	const claim = claims.find((claim) => claim.id === currentId);
	if (!claim) return {};

	return pick(claim, ['id', 'content', 'usedAt']);
}