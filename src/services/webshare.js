export function canShare(data) {
	return navigator && 'canShare' in navigator && navigator.canShare(data);
}

export function share (data) {
	return navigator.share(data);
}