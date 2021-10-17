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

const addTheAnimal = (event) => {
	const [type, name] = animalToAdd.value.split(',');
	zooListing.insertAdjacentHTML('beforeend', `<tr><td>${type}</td><td>${name}</td></tr>`);
}

const transferTheAnimal = (event) => {
	//
	// here it is written to a database somewhere.
	//
	if (transferAnimalTableElement) {
		transferAnimalTableElement.remove();
		transferAnimalTableElement = null;
		animalToTransfer.value = "";
	}

	console.log(event);
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