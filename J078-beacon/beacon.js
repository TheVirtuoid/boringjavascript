const sendFetchTag = () => {
	const { appCodeName, cookieEnabled, language } = navigator;
	const sendData = `acn=${appCodeName}&ce=${cookieEnabled}&lang=${language}`;
	fetch(`./analytics.json?${sendData}`)
			.then(response => response.json())
			.then(data => console.log(data));
}

const sendBeacon = () => {
	const { appCodeName, cookieEnabled, language } = navigator;
	const sendData = `acn=${appCodeName}&ce=${cookieEnabled}&lang=${language}`;
	navigator.sendBeacon(`./analytics.json?${sendData}`);
}

document.addEventListener('visibilitychange', () => {
	if (document.visibilityState === 'hidden') {
		sendBeacon();
	}
});