const clickMeDom = document.getElementById('clickMe');
const boxDom = document.getElementById('box');
const customDom = document.getElementById('custom');

clickMeDom.addEventListener('click', fireEvent);
boxDom.addEventListener('changeToGreen', changeToGreen);

function fireEvent(event) {
	const customEvent = new CustomEvent('changeToGreen', {detail: "Green"})
	boxDom.dispatchEvent(customEvent);
}

function changeToGreen(event) {
	customDom.textContent = `CustomEvent: ${event instanceof CustomEvent}. Type =  ${event.type}. Detail = ${event.detail}`;
	boxDom.textContent = event.detail;
	boxDom.classList.add('green');
}