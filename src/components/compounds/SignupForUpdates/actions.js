import api from 'services/xhr';
import trackEvents from 'services/track-events';

export default {

	async signUser(state, { notifyWhenMajorUpdates, notifyWhenMinorUpdates }) {
		const updates = [];
		if (notifyWhenMajorUpdates) updates.push('notify-major-updates');
		if (notifyWhenMinorUpdates) updates.push('notify-minor-updates');
		api.signUserForUpdates({updates});
		trackEvents('subscribe_to_updates', { notifyWhenMajorUpdates, notifyWhenMinorUpdates });
	}

};