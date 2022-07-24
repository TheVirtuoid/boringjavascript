/*
	NOTE!!

	This server implementation is on a UNSECURED line since all we're working
	with is localhost.

	If you wish to use it elsewhere, you will need to change the code to accept
	secure connections.

 */

import { WebSocketServer } from 'ws';


const onMessage = (message) => {
	console.log(message.toString());
};

const onConnection = (wsConnection) => {
	console.log('----connection made to client.');
	wsConnection.on('message', onMessage);
	wsConnection.send('Connected');
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
