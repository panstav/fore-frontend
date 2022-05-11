import api from 'services/xhr';

export default {

	async signUser(state, { notifyWhenOpenBeta, notifyOtherContibutionOptions }) {
		const updates = [];
		if (notifyWhenOpenBeta) updates.push('notify-open-beta');
		if (notifyOtherContibutionOptions) updates.push('notify-closed-beta-contributions');
		api.signUserForBetaUpdates({updates});
	}

};