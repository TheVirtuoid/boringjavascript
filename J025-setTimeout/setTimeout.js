const results = document.getElementById('results');

sendText(results, "Before setTimeout");
const myTimeout = setTimeout(setTimeoutFunction, 3000);
sendText(results, "After setTimeout");


function setTimeoutFunction () {
	sendText(results, "*** setTimeoutFunction has executed ***");
}

function sendText(dom, text) {
	const p = document.createElement('p');
	p.textContent = text;
	dom.appendChild(p);
}







document.getElementById('cancel').addEventListener('click', cancel);
function cancel(event) {
	clearTimeout(myTimeout);
	sendText(results, "MYTIMEOUT has been cancelled!");
}




