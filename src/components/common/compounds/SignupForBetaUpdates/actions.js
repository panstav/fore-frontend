import api from 'services/xhr';

export default {

	async signUser(state, { notifyWhenOpenBeta, notifyOtherContributionOptions }) {
		const updates = [];
		if (notifyWhenOpenBeta) updates.push('notify-open-beta');
		if (notifyOtherContributionOptions) updates.push('notify-closed-beta-contributions');
		api.signUserForBetaUpdates({updates});
	}

};