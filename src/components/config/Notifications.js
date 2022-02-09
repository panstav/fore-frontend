import { ToastContainer } from 'react-toastify';

export default function Notifications() {
	return <ToastContainer
		position="bottom-left"
		autoClose={3000}
		hideProgressBar={true}
		newestOnTop={false}
		closeOnClick={false}
		rtl={false}
		pauseOnFocusLoss={false}
		draggable={false}
		pauseOnHover={true}
		transition="slide"
	/>;
}