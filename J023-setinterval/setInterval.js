const results = document.getElementById('results');

sendText(results, "Before setInterval");
const myInterval = setInterval(setIntervalFunction, 2000);
sendText(results, "After setInterval");

function setIntervalFunction (params) {
	sendText(results, "*** setIntervalFunction has executed ***");
}

function sendText(dom, text) {
	const p = document.createElement('p');
	p.textContent = text;
	dom.appendChild(p);
}
