import api from 'services/xhr';

export default {

	async identify() {
		const { user = {}, spaces = [] } = await api.identify();
		return { user, spaces };
	}

};