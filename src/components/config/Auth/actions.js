import api from 'services/xhr';

export default {

	async identify() {
		const { user = {}, spaces = [], notifications = [] } = await api.identify();
		return { user, spaces, notifications };
	}

};