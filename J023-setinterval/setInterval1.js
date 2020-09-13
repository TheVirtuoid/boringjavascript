const results = document.getElementById('results');
const params = {count: 0};

sendText(results, "Before setInterval");
const myInterval = setInterval(setIntervalFunction, 2000, params);
sendText(results, "After setInterval");

function setIntervalFunction (params) {
	sendText(results, "*** setIntervalFunction has executed ***");
	params.count++;
	if (params.count >= 5) {
		clearInterval(myInterval);
		sendText(results, "------- setIntervalFunction has stopped -------");
	}
}

function sendText(dom, text) {
	const p = document.createElement('p');
	p.textContent = text;
	dom.appendChild(p);
}
