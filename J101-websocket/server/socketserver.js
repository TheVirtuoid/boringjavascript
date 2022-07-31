/*
	NOTE!!

	This server implementation is on a UNSECURED line since all we're working
	with is localhost.

	If you wish to use it elsewhere, you will need to change the code to accept
	secure connections.

 */

import { WebSocketServer } from 'ws';
let wsConnection;

const onMessage = (message) => {
	console.log(message.toString());
	wsConnection.send(`You sent: ${message}`);
};

const onConnection = (connection) => {
	console.log('----connection made to client.');
	connection.on('message', onMessage);
	connection.send('Connected');
	wsConnection = connection;
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

const onListening = () => {
	console.log('onListening');
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
