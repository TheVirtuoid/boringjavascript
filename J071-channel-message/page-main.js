const loadingDockInterface = document.querySelector('#loading-dock iframe');
const zoo = document.querySelector('#zoo table tbody');

const messageChannel = new MessageChannel();
const zooPort = messageChannel.port1;

const transferAnimalToZoo = (event) => {
	const [ type, name ] = event.data.split(',');
	const tr = document.createElement('tr');
	tr.insertAdjacentHTML('beforeend', `<td>${type}</td>`);
	tr.insertAdjacentHTML('beforeend', `<td>${name}</td>`);
	tr.insertAdjacentHTML('beforeend', `<td><button>Remove</button></td>`);
	zoo.appendChild(tr);
}

const transferAnimalToLoadingDock = (event) => {
	if (event.target.tagName === 'BUTTON') {
		const tdName = event.target.parentElement.previousElementSibling;
		const tdType = tdName.previousElementSibling;
		const animalToTransfer = `${tdType.textContent},${tdName.textContent}`;
		zooPort.postMessage(animalToTransfer);
		tdName.parentElement.remove();
	}
}

const initializeLoadingDock = (event) => {
	zooPort.addEventListener('message', transferAnimalToZoo);
	zooPort.start();
	loadingDockInterface.contentWindow.postMessage('init', '*', [messageChannel.port2]);
};
loadingDockInterface.addEventListener('load', initializeLoadingDock);
zoo.addEventListener('click', transferAnimalToLoadingDock);


