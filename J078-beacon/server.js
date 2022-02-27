const http = require('http');
const path = require('path');
const fs = require('fs');
const host = 'localhost';
const port = 24601;

const contentType = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'text/javascript',
	'.ico': 'image/vnd.microsoft.icon'
}

const output = (html, response, contentType) => {
	response.setHeader('Content-Type', contentType);
	response.writeHead(200);
	response.end(html);
};

const processGet = (url, response) => {
	let fileToRead = url === '/' ? './index.html' : url;
	fileToRead = fileToRead.startsWith('.') ? fileToRead : `.${fileToRead}`;
	const html = fs.readFileSync(path.resolve(fileToRead));
	const outputContentType = contentType[path.extname(fileToRead)];
	output(html, response, outputContentType);
}

const processPost = (request) => {
	let body = '';
	let output = {};
	request.on('data', (chunk) => {
		body += chunk.toString();
	})
	request.on('end', () => {
		body.split('------').map((entry, index) => {
			const [markerText, appText, blankText, valueText] = entry.split('\r\n');
			if (valueText) {
				const [contentText, nameText] = appText.split(';');
				const [temp1, key, temp2] = nameText.split('"');
				const value = { "true": true, "false": false }[valueText] ? { "true": true, "false": false }[valueText] : valueText;
				output[key]=value;
				//console.log(key, valueText);
			}
		});
		fs.writeFileSync(path.resolve(`./${request.url}`), JSON.stringify(output));
		// console.log(JSON.stringify(output));
	});
}

const requestListener = (request, response) => {
	const { url, method } = request;
	switch(method) {
		case 'GET':
			processGet(url, response);
			break;
		case 'POST':
			console.log('---------posting ' + url);
			processPost(request);
			break;
	}
};

const server = http.createServer(requestListener);
server.listen(port, host);