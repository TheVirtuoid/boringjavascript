const gamepadConnected = (event) => {
	console.log(event.gamepad);
};
const gamepadDisconnected = (event) => {};

window.addEventListener("gamepadconnected", gamepadConnected);
window.addEventListener("gamepadconnected", gamepadDisconnected);
