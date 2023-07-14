export default function disableEventTracking() {
	if (window.clarity) window.clarity('stop');
	if (window.gtag) window.gtag('set', { 'allow_google_signals': false });
}