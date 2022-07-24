const onOpen = (event) => {
	log('websocket opened');
	webSocket.send('thank you!');
}

const onMessage = (event) => {
	log('websocket messages received');
}

const onClose = (event) => {
	log('websocket closed');
}

const onError = (event) => {
	log('websocket error');
	console.log(event);
}

const sendText = (event) => {
	const textToSend = textInput.value;
	log(`---attempting to send: ${textToSend}`);
	webSocket.send(textToSend);
}

const log = (text) => {
	output.value = `${output.value}\n${text}`;
}

const output = document.getElementById('output');
const sendButton = document.getElementById('send');
const textInput = document.getElementById('text');

sendButton.addEventListener('click', sendText);

const webSocket = new WebSocket('ws://localhost:24601');

webSocket.addEventListener('open', onOpen);
webSocket.addEventListener('message', onMessage);
webSocket.addEventListener('error', onError);
webSocket.addEventListener('close', onClose);