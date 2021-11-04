const loadingDockInterface = document.querySelector('#loading-dock iframe');
const zoo = document.querySelector('#zoo table tbody');

const loadingDockChannel = new MessageChannel();
const loadingDockChannelPort = loadingDockChannel.port1;

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
		loadingDockChannelPort.postMessage(animalToTransfer);
		tdName.parentElement.remove();
	}
}

const initializeLoadingDock = (event) => {
	loadingDockChannelPort.addEventListener('message', transferAnimalToZoo);
	loadingDockChannelPort.start();
	loadingDockInterface.contentWindow.postMessage('init', '*', [loadingDockChannel.port2]);
};
loadingDockInterface.addEventListener('load', initializeLoadingDock);
zoo.addEventListener('click', transferAnimalToLoadingDock);


