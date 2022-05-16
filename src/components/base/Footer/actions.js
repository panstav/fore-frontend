import api from 'services/xhr';

import { roles } from 'constants.js';

export default {

	logOut({ user }) {
		api.logout();
		user.role = roles.GUEST;
		return { user };
	}

};