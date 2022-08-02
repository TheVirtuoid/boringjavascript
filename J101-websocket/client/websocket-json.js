/*

			Commands coming from the server

 */

const openTheZoo = (data) => {
	data.forEach((animal) => addAnimal(animal));
	zooIsClosed.classList.add('hidden');
	zooTable.classList.remove('hidden');
}

const getTheAnimals = (data) => {
	animalsInQueue = animalsInQueue.concat(data);
	animalsInQueueDom.textContent = animalsInQueue.length.toString();
}

const serverCommands = new Map();
serverCommands.set('open', openTheZoo);
serverCommands.set('get', getTheAnimals);
let animalsInQueue = [];



/*

			Websocket event handlers

 */
const onOpen = (event) => {
	log('websocket opened');
}

const onMessage = (event) => {
	const { command, data } = JSON.parse(event.data);
	const router = serverCommands.get(command);
	if (router) router(data);
}

const onClose = (event) => {
	log('websocket closed');
}

const onError = (event) => {
	log('websocket error');
	console.log(event);
}

const log = (text) => {
	console.log(text);
}


/*

			User Actions from action bar


 */
const actionOpen = () => {
	webSocket.send(JSON.stringify({ command: 'open', data: {} }));
}

const actionRemove = () => {
	const animalsToRemove = [];
	[...zooTableBody.querySelectorAll('input:checked')].forEach((input) => {
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
		const dataToSend = { command: 'remove', data: animalsToRemove };
		webSocket.send(JSON.stringify(dataToSend));
	}
}

const actionGet = () => {
	console.log(animalsInQueue);
	while (animalsInQueue.length) {
		addAnimal(animalsInQueue.pop());
	}
	animalsInQueueDom.textContent = '0';
};

const actionClose = () => {
	const dataToSend = { command: 'close', data: {}};
	webSocket.send(JSON.stringify(dataToSend));
	[...zooTableBody.querySelectorAll('input')].forEach((input) => input.checked = true);
	actionRemove();
	const removeQueuedAnimals = { command: 'remove', data: animalsInQueue };
	webSocket.send(JSON.stringify(removeQueuedAnimals));
	animalsInQueueDom.textContent = '0';
	zooTable.classList.add('hidden');
	zooIsClosed.classList.remove('hidden');
};

const userActions = new Map();
userActions.set('open', actionOpen);
userActions.set('remove', actionRemove);
userActions.set('get', actionGet);
userActions.set('close', actionClose);

const processCommand = (event) => {
	let { target } = event;
	while (!(target instanceof HTMLButtonElement)) target = target.parentElement;
	const command  = target.getAttribute('data-tag');
	const action = userActions.get(command);
	if (action) action();
}

/*

			Utility Functions

 */

const addAnimal = (animal) => {
	const row = `<tr><td><input type="checkbox" /></td><td>${animal.type}</td><td>${animal.name}</td><td>${animal.class}</td><td></td></tr>`;
	zooTableBody.insertAdjacentHTML('beforeend', row);
};


/*

			Starting the game

 */

document.querySelector('#actions .action-list').addEventListener('click', processCommand);
const animalsInQueueDom = document.getElementById('count');

const webSocket = new WebSocket('ws://localhost:24601');
webSocket.addEventListener('open', onOpen);
webSocket.addEventListener('message', onMessage);
webSocket.addEventListener('error', onError);
webSocket.addEventListener('close', onClose);

const zooTableBody = document.querySelector('#zoo table tbody');
const zooIsClosed = document.getElementById('closed');
const zooTable = document.querySelector('#zoo table');


