export default function trackEvents(eventName, eventData) {
	if (process.env.NODE_ENV !== 'production' || !('gtag' in window)) return;

	// submit event to google analytics by gtag
	window.gtag('event', eventName, eventData);
}