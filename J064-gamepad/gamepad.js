let gamepadIndex = -1;
const domConnected = document.getElementById('connected');
const domId = document.getElementById('id');
const domButtons = document.getElementById('buttons');

const buttonList = [
		'A', 'B', 'X', 'Y', 'Left-Top', 'Right-Top', 'Left-Trigger', 'Right-Trigger',
		'Home/Select', 'Start', 'Left-Stick', 'Right-Stick', 'DPad-Up', 'DPad-Down',
		'DPad-Left', 'DPad-Right'
]

const gamepadConnected = (event) => {
	gamepadIndex = event.gamepad.index;
	// console.log(gamepad);
	domConnected.textContent = "Yes";
	requestAnimationFrame(updateTable);
};
const gamepadDisconnected = (event) => {
	domConnected.textConent = "No";
};

const updateTable = () => {
	const gamepad = navigator.getGamepads()[gamepadIndex];
	domConnected.textContent = gamepad.connected ? "Yes" : "No";
	domId.textContent = gamepad.id;
	while(domButtons.firstChild) domButtons.removeChild(domButtons.firstChild);
	gamepad.buttons.forEach( (button, index) => {
		domButtons.insertAdjacentHTML('beforeend', `<p>${buttonList[index]},${button.pressed},${button.touched},${button.value}`);
	});
	requestAnimationFrame(updateTable);
}

domConnected.textContent = "Unknown";
window.addEventListener("gamepadconnected", gamepadConnected);
window.addEventListener("gamepadconnected", gamepadDisconnected);
