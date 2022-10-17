import api from 'services/xhr';

import scrollBackToTop from 'lib/scroll-back-to-top';

import initialState from 'config/Providers/Store/initial-state';

export default {

	async logOut() {
		await api.logout();
		scrollBackToTop();
		return initialState;
	}

};