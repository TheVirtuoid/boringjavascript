let iFramePort = null;
const animalToAdd = document.getElementById('animal-to-add');
const addAnimal = document.getElementById('add-animal');
const animalToTransfer = document.getElementById('animal-to-transfer');
const transferAnimal = document.getElementById('transfer-animal');
const zooListing = document.getElementById('zoo-listing');

let transferAnimalTableElement = null;

const setDisplayForIFrame = (event) => {
	switch (event.data) {
		case 'init':
			iFramePort = event.ports[0];
			iFramePort.addEventListener('message', receiveAnAnimal);
			document.body.classList.add('iframe');
			iFramePort.start();
			break;
		default:
			break;
	}
}

const addTheAnimal = (event) => {
	const [type, name] = animalToAdd.value.split(',');
	zooListing.insertAdjacentHTML('beforeend', `<tr><td>${type}</td><td>${name}</td></tr>`);
	animalToAdd.value = '';
}

const transferTheAnimal = (event) => {
	if (animalToTransfer.value) {
		iFramePort.postMessage(animalToTransfer.value);
		transferAnimalTableElement.remove();
		transferAnimalTableElement = null;
		animalToTransfer.value = "";
	}
}

const receiveAnAnimal = (event) => {
	animalToAdd.value = event.data;
}

const addAnimalToTransferInput = (event) => {
	transferAnimalTableElement = event.target.parentElement;
	const transferAnimalText = `${transferAnimalTableElement.firstChild.textContent},${transferAnimalTableElement.firstChild.nextSibling.textContent}`;
	animalToTransfer.value = transferAnimalText;
}

window.addEventListener('message', setDisplayForIFrame);
addAnimal.addEventListener('click', addTheAnimal);
transferAnimal.addEventListener('click', transferTheAnimal);
zooListing.addEventListener('click', addAnimalToTransferInput);