let gamepadIndex = -1;
const domConnected = document.getElementById('connected');
const domId = document.getElementById('id');
const domIds = new Map();
const mapping = new Map();

mapping.set('standard', [
		'A', 'B', 'X', 'Y', 'Left-Top', 'Right-Top', 'Left-Trigger', 'Right-Trigger',
		'Home-Select', 'Start', 'Left-Stick', 'Right-Stick', 'DPad-Up', 'DPad-Down',
		'DPad-Left', 'DPad-Right', 'Unknown'
]);

const buildDomIds = (controllerMapping) => {
	const buttonMapping = mapping.get(controllerMapping);
	buttonMapping.forEach( (buttonName) => {
		domIds.set(buttonName, {
			dom: document.getElementById(buttonName),
			display: buttonName.includes('Trigger') ? 'number' : 'boolean'
		});
	});

};

const gamepadConnected = (event) => {
	gamepadIndex = event.gamepad.index;
	console.log(navigator.getGamepads()[gamepadIndex]);
	domConnected.textContent = "Yes";
	buildDomIds(navigator.getGamepads()[gamepadIndex].mapping);
	requestAnimationFrame(updateTable);
};

const gamepadDisconnected = (event) => {
	domConnected.textConent = "No";
};

const updateTable = () => {
	const gamepad = navigator.getGamepads()[gamepadIndex];
	domConnected.textContent = gamepad.connected ? "Yes" : "No";
	domId.textContent = gamepad.id;
	const buttonMapping = mapping.get(gamepad.mapping);
	gamepad.buttons.forEach( (button, index) => {
		const { dom, display } = domIds.get(buttonMapping[index]);
		if (display === "boolean") {
			dom.classList.remove('on', 'off');
			dom.classList.add(button.pressed ? 'on' : 'off');
			dom.textContent = button.pressed ? 'on' : 'off';
		} else if (display === "number") {
			dom.textContent = button.value.toFixed(2);
		}
		// domIds.get(buttonList[index]).textContent = `${button.pressed},${button.touched},${button.value}`;
	});
	requestAnimationFrame(updateTable);
}

domConnected.textContent = "Unknown";
window.addEventListener("gamepadconnected", gamepadConnected);
window.addEventListener("gamepadconnected", gamepadDisconnected);
