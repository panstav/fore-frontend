import api from 'services/xhr';
import trackEvents from 'services/track-events';

export default {

	async signUser(state, { notifyWhenOpenBeta, notifyOtherContributionOptions }) {
		const updates = [];
		if (notifyWhenOpenBeta) updates.push('notify-open-beta');
		if (notifyOtherContributionOptions) updates.push('notify-closed-beta-contributions');
		api.signUserForBetaUpdates({updates});
		trackEvents('register_for_beta_updates', { notifyWhenOpenBeta, notifyOtherContributionOptions });
	}

};