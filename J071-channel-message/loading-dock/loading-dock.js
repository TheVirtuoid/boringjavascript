let iFramePort = null;
const setDisplayForIFrame = (event) => {
	switch (event.data) {
		case 'init':
			iFramePort = event.ports[0];
			iFramePort.addEventListener('message', receivedMessageFromParent);
			document.body.classList.add('iframe');
			break;
		default:
			break;
	}
}

const receivedMessageFromParent = (event) => {
	console.log(event);
}

window.addEventListener('message', setDisplayForIFrame);
