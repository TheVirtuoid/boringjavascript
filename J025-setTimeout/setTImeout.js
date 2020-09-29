const results = document.getElementById('results');

sendText(results, "Before setTimeout");
const myTimeout = setTimeout(setTimeoutFunction, 2000);
sendText(results, "After setTimeout");

function setTimeoutFunction (params) {
	sendText(results, "*** setTimeoutFunction has executed ***");
}

function sendText(dom, text) {
	const p = document.createElement('p');
	p.textContent = text;
	dom.appendChild(p);
}
