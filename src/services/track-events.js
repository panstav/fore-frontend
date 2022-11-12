export default function trackEvents(eventName, eventData) {
	if (process.env.NODE_ENV !== 'production' || !window.dataLayer) return;

	window.dataLayer.push({
		event: `fore-${eventName}`,
		eventName,
		...eventData
	});
}