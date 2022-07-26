import api from 'services/xhr';

import scrollBackToTop from 'lib/scroll-back-to-top';

import { roles } from 'constants.js';

export default {

	logOut({ user }) {
		api.logout();
		scrollBackToTop();
		user.role = roles.GUEST;
		return { user };
	}

};