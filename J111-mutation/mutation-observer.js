const addButton = document.getElementById('add');
const tbody = document.querySelector('table tbody');

const addAnimal = (event) => {
	reallyBadThirdPartyAddAnimal(tbody);
};

const reallyBadThirdPartyAddAnimal = (element) => {
	const animalToAddIndex = Math.floor(Math.random() * animals.length);
	const animalToAdd = animals.splice(animalToAddIndex, 1)[0];
	const rowToAdd = `<tr><td>${animalToAdd.type}</td><td>${animalToAdd.name}</td></tr>`;
	const rows = element.querySelectorAll('tr');
	if (rows.length === 0) {
		element.insertAdjacentHTML('beforeend', rowToAdd);
	} else {
		const destination = Math.floor(Math.random() * rows.length);
		rows[destination].insertAdjacentHTML('afterend', rowToAdd);
	}
}

const addedANewAnimal = (event) => {
	if (event[0].addedNodes.length === 1) {
		const theAnimalAdded = event[0].addedNodes[0].innerText;
		animalAdded.textContent = theAnimalAdded;
	}
}

let animals = null;
let tableObserver = null;
const animalAdded = document.getElementById('animal-added');
fetch('./animals-noclass.json')
		.then((response) => response.json())
		.then((data) => {
			animals = data;
			tableObserver = new MutationObserver(addedANewAnimal);
			tableObserver.observe(tbody, { childList: true });
			addButton.removeAttribute('disabled');
		});

addButton.addEventListener('click', addAnimal);
/*
const addAnimal = (event) => {
	const animalToAddIndex = Math.floor(Math.random() * animals.length);
	const animalToAdd = animals.splice(animalToAddIndex, 1)[0];
	const rowToAdd = `<tr><td>${animalToAdd.type}</td><td>${animalToAdd.name}</td></tr>`;
	tbody.insertAdjacentHTML('beforeend', rowToAdd);
};
 */

/*
const addAnimal = (event) => {
	badThirdPartyAddAnimal(tbody);
};

const badThirdPartyAddAnimal = (element) => {
	const animalToAddIndex = Math.floor(Math.random() * animals.length);
	const animalToAdd = animals.splice(animalToAddIndex, 1)[0];
	const rowToAdd = `<tr><td>${animalToAdd.type}</td><td>${animalToAdd.name}</td></tr>`;
	element.insertAdjacentHTML('beforeend', rowToAdd);
}
 */

/*
const addAnimal = (event) => {
	reallyBadThirdPartyAddAnimal(tbody);
};

const reallyBadThirdPartyAddAnimal = (element) => {
	const animalToAddIndex = Math.floor(Math.random() * animals.length);
	const animalToAdd = animals.splice(animalToAddIndex, 1)[0];
	const rowToAdd = `<tr><td>${animalToAdd.type}</td><td>${animalToAdd.name}</td></tr>`;
	const rows = element.querySelectorAll('tr');
	if (rows.length === 0) {
		element.insertAdjacentHTML('beforeend', rowToAdd);
	} else {
		const destination = Math.floor(Math.random() * rows.length);
		rows[destination].insertAdjacentHTML('afterend', rowToAdd);
	}
}
 */

/*
const addedANewAnimal = (event) => {
	if (event[0].addedNodes.length === 1) {
		const theAnimalAdded = event[0].addedNodes[0].innerText;
		animalAdded.textContent = theAnimalAdded;
	}
}

let animals = null;
let tableObserver = null;
const animalAdded = document.getElementById('animal-added');
fetch('./animals-noclass.json')
		.then((response) => response.json())
		.then((data) => {
			animals = data;
			tableObserver = new MutationObserver(addedANewAnimal);
			tableObserver.observe(tbody, { childList: true });
			addButton.removeAttribute('disabled');
		});

 */