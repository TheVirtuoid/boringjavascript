/*
	NOTE!!

	This server implementation is on a UNSECURED line since all we're working
	with is localhost.

	If you wish to use it elsewhere, you will need to change the code to accept
	secure connections.

 */

import { WebSocketServer } from 'ws';
import { readFileSync } from 'fs';

let isZooOpen = false;
let wsConnection;
const zooAnimals = JSON.parse(readFileSync('./animals.json').toString());

const openZoo = () => {
	isZooOpen = true;
	const outputAnimals = zooAnimals.splice(0, 10);
	send({ command: 'open', data: outputAnimals });
}

const closeZoo = () => {
	isZooOpen = false;
}

const send = (data) => {
	console.log(`Sending msg: ${JSON.stringify(data)}`);
	wsConnection.send(JSON.stringify(data));
}

const removeAnimals = (data) => {
	data.forEach((animal) => {
		zooAnimals.push(animal);
	});
	const response = { command: 'remove', data: {} };
	send(response);
}

const sendAnimal = (animal) => {
	if (isZooOpen && zooAnimals.length) {
		const animalIndex = Math.floor(Math.random() * zooAnimals.length);
		const animal = zooAnimals.splice(animalIndex, 1);
		const response = { command: 'get', data: animal };
		send(response);
	}
	setTimeout(sendAnimal, (Math.floor(Math.random() * 5) + 5) * 1000)
}

const commands = new Map();
commands.set('open', openZoo);
commands.set('remove', removeAnimals);
commands.set('close', closeZoo);

const onMessage = (message) => {
	console.log(`Received msg: ${message}`);
	const { command, data } = JSON.parse(message.toString());
	const router = commands.get(command);
	if (router) router(data);
};

const onConnection = (connection) => {
	console.log('----connection made to client.');
	wsConnection = connection;
	wsConnection.on('message', onMessage);
};

const onError = (event) => {
	console.log('onError');
	console.log(event);
}

const onClose = (event) => {
	console.log('onClose');
	console.log(event);
}

const onHeaders = (event) => {
	console.log('onHeaders');
}

const onListening = (event) => {
	console.log('onListening');
	console.log(event);
}

const onWsClientError = (event) => {
	console.log('onWsClientError')
	console.log(event);
}

const wss = new WebSocketServer({ port: 24601 });

wss.on('connection', onConnection);
wss.on('close', onClose);
wss.on('error', onError);
wss.on('headers', onHeaders);
wss.on('listening', onListening);
wss.on('wsClientError', onWsClientError);

console.log('Server has started!');

setTimeout(sendAnimal, (Math.floor(Math.random() * 5) + 5) * 1000)