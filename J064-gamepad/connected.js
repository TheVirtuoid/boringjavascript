const gamepadConnected = (event) => {
	log.insertAdjacentHTML('beforeend', `<p>Gamepad #${event.gamepad.index} connected. Let's Play!</p>`);
};

const gamepadDisconnected = (event) => {
	log.insertAdjacentHTML('beforeend', `<p>Gamepad #${event.gamepad.index} disconnected. Sore loser!</p>`);
};

const updateConnected = () => {
	while (connected.firstChild) connected.removeChild(connected.firstChild);
	[...navigator.getGamepads()].forEach( gamepad => {
		const li = document.createElement('li');
		li.textContent = gamepad ? gamepad.id : 'null';
		connected.appendChild(li);
	});
	requestAnimationFrame(updateConnected);
};

const connected = document.getElementById('connected');
const log = document.getElementById('log');
window.addEventListener('gamepadconnected', gamepadConnected);
window.addEventListener('gamepaddisconnected', gamepadDisconnected);
requestAnimationFrame(updateConnected);
