const openTheZoo = (data) => {
	data.forEach((animal) => addAnimal(animal));
}

const removeSelectedAnimals = () => {
	const animalsToRemove = [];
	[...zooTable.querySelectorAll('input:checked')].forEach((input) => {
		const row = input.parentElement.parentElement;
		const animalToSend = {
			type: row.querySelector('td:nth-child(2)').textContent,
			name: row.querySelector('td:nth-child(3)').textContent,
			'class': row.querySelector('td:nth-child(4)').textContent
		}
		animalsToRemove.push(animalToSend);
		row.parentElement.removeChild(row);
	});
	if (animalsToRemove.length) {
		const dataToSend = { command: 'remove', data: animalsToSend };
		webSocket.send(JSON.stringify(dataToSend));
	}

}


const commands = new Map();
commands.set('open', openTheZoo);
commands.set('remove', removeSelectedAnimals);

const onOpen = (event) => {
	log('websocket opened');
}

const onMessage = (event) => {
	log('websocket messages received');
	log(event);
	const { command, data } = JSON.parse(event.data);
	const router = commands.get(command);
	if (router) router(data);
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
	// output.value = `${output.value}\n${text}`;
	console.log(text);
}

const actionOpen = () => {
	webSocket.send(JSON.stringify({ command: 'open', data: {} }));
}

const userActions = new Map();
userActions.set('open', actionOpen);

const processCommand = (event) => {
	const command  = event.target.getAttribute('data-tag');
	const action = userActions.get(command);
	if (action) action();
}

document.querySelector('#actions .action-list').addEventListener('click', processCommand);
const webSocket = new WebSocket('ws://localhost:24601');

webSocket.addEventListener('open', onOpen);
webSocket.addEventListener('message', onMessage);
webSocket.addEventListener('error', onError);
webSocket.addEventListener('close', onClose);

const zooTable = document.querySelector('#zoo table tbody');

const addAnimal = (animal) => {
	const row = `<tr><td><input type="checkbox" /></td><td>${animal.type}</td><td>${animal.name}</td><td>${animal.class}</td><td></td></tr>`;
	zooTable.insertAdjacentHTML('beforeend', row);
};

