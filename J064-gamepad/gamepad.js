let gamepadIndex = -1;
const domConnected = document.getElementById('connected');
const domId = document.getElementById('id');
const domIds = new Map();

const buttonList = [
		'A', 'B', 'X', 'Y', 'Left-Top', 'Right-Top', 'Left-Trigger', 'Right-Trigger',
		'Home-Select', 'Start', 'Left-Stick', 'Right-Stick', 'DPad-Up', 'DPad-Down',
		'DPad-Left', 'DPad-Right', 'Unknown'
]

buttonList.forEach( (buttonName) => {
	domIds.set(buttonName, {
		dom: document.getElementById(buttonName),
		display: buttonName.includes('Trigger') ? 'number' : 'boolean'
	});
});

const gamepadConnected = (event) => {
	gamepadIndex = event.gamepad.index;
	console.log(navigator.getGamepads()[gamepadIndex]);
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
	gamepad.buttons.forEach( (button, index) => {
		const { dom, display } = domIds.get(buttonList[index]);
		if (display === "boolean") {
			dom.classList.remove('on', 'off');
			dom.classList.add(button.pressed ? 'on' : 'off');
			dom.textContent = button.pressed ? 'on' : 'off';
		}
		// domIds.get(buttonList[index]).textContent = `${button.pressed},${button.touched},${button.value}`;
	});
	requestAnimationFrame(updateTable);
}

domConnected.textContent = "Unknown";
window.addEventListener("gamepadconnected", gamepadConnected);
window.addEventListener("gamepadconnected", gamepadDisconnected);
