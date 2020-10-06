const results = document.getElementById('results');
let myVar1 = 1;
let myVar2 = 2;
let myVar3 = 500;

sendText(results, "Before setTimeout");
const myTimeout = setTimeout(setTimeoutFunction, 3000, myVar1, myVar2, myVar3);
sendText(results, "After setTimeout");


function setTimeoutFunction (incomingVar1, incomingVar2, incomingVar3) {
	sendText(results, `*** Variables passed: (${incomingVar1}, ${incomingVar2}, ${incomingVar3}) ***`);
}

function sendText(dom, text) {
	const p = document.createElement('p');
	p.textContent = text;
	dom.appendChild(p);
}
