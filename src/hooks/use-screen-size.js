// taken from https://github.com/kingflamez/use-screen-size/

import { useEffect, useState } from 'preact/compat';

export default function useScreenSize(options = {}) {

	const [screenSize, setScreenSize] = useState(getSize());

	const onResize = debounce(() => setScreenSize(getSize()), (options.debounce || 500));

	useEffect(() => {
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	return screenSize;
}

function getSize() {
	return {
		width: window.innerWidth,
		height: window.innerHeight
	};
}

function debounce(func, delay) {
	let timerId;
	return function() {
		clearTimeout(timerId);
		timerId = setTimeout(() => func.apply(this, arguments), delay);
	};
}