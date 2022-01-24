const sendBeacon = () => {
	const { appCodeName, cookieEnabled, language } = navigator;
	const data = new FormData();
	data.append('appCodeName', appCodeName);
	data.append('cookieEnabled', `${cookieEnabled}`);
	data.append('language', language);
	navigator.sendBeacon(`./analytics.json`, data);
}

let visible = false;

document.addEventListener('visibilitychange', () => {
	console.log(document.visibilityState);
	if (document.visibilityState === 'hidden' && visible) {
		sendBeacon();
	} else if (document.visibilityState === 'visible') {
		visible = true;
	}
});

