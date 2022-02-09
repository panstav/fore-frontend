import { useEffect } from 'preact/compat';

export default function useEscape(fn) {

	useEffect(() => {
		document.addEventListener('keydown', closeOnEscape);
		return () => document.removeEventListener('keydown', closeOnEscape);
	}, []);

	function closeOnEscape(event) {
		if (event.key === 'Escape') fn();
	}

}