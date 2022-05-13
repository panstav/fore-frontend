import { ToastContainer } from 'react-toastify';

import { notifications } from 'constants.js';

export default function Notifications() {
	return <ToastContainer
		position="bottom-left"
		autoClose={notifications.autoCloseMs}
		hideProgressBar={true}
		newestOnTop={false}
		closeOnClick={false}
		rtl={false}
		pauseOnFocusLoss={false}
		draggable={false}
		pauseOnHover={true}
	/>;
}