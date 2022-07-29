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
	const outputAnimals = zooAnimals.slice(0, 10);
	send({ command: 'open', data: outputAnimals });
}

const send = (data) => {
	wsConnection.send(JSON.stringify(data));
}

const commands = new Map();
commands.set('open', openZoo);

const onMessage = (message) => {
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
	console.log(event);
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
