const sendBeacon = () => {
	const { appCodeName, cookieEnabled, language } = navigator;
	const data = new FormData();
	data.append('appCodeName', appCodeName);
	data.append('cookieEnabled', `${cookieEnabled}`);
	data.append('language', language);
	navigator.sendBeacon(`./analytics.json`, data);
}

const setupAnalyticsListener = () => {
	document.addEventListener('visibilitychange', () => {
		if (document.visibilityState === 'hidden') {
			sendBeacon();
		};
	}, { once: true});

}

window.addEventListener('load', setupAnalyticsListener);


