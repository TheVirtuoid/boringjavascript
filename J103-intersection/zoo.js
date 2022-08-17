const zooList = document.querySelector('table tbody');
let lastAnimal = null;
let lastAnimalIndex = 0;
let animals;

const getResponse = async (response) => {
	const animals = await response.json();
	return Promise.resolve({ animals, lastAnimalIndex: 0});
};

const populateTable = (args) => {
	let { animals, lastAnimalIndex, lastAnimal = null } = args;
	const previousAnimal = lastAnimal;
	if (lastAnimalIndex < animals.length) {
		const startData = lastAnimalIndex;
		lastAnimalIndex += 10;
		const endData = lastAnimalIndex;
		const displayAnimals = animals.filter((animal, index) => index >= startData && index < endData);
		displayAnimals.forEach((animal, index) => {
			const tr = document.createElement('tr');
			tr.insertAdjacentHTML('afterbegin', `<td>${index + startData}</td><td>${animal.name}</td><td>${animal.type}</td>`);
			lastAnimal = tr;
			zooList.appendChild(tr);
		});
	}
	return Promise.resolve({ animals, lastAnimalIndex, lastAnimal, previousAnimal });
};

const saveData = (args) => {
	animals = args.animals;
	lastAnimal = args.lastAnimal;
	lastAnimalIndex = args.lastAnimalIndex;
	const previousAnimal = args.previousAnimal;
	return Promise.resolve({ lastAnimal, previousAnimal });
};

const prepareObserver = (args) => {
	const { lastAnimal, previousAnimal } = args;
	if (previousAnimal) {
		animalObserver.unobserve(previousAnimal);
	}
	if (lastAnimal) {
		animalObserver.observe(lastAnimal);
	}
	return Promise.resolve();
};

const prepareToPopulateTable = (animalEntries, observer) => {
	const animalAtEnd = animalEntries[0];
	if (animalAtEnd.isIntersecting) {
		populateTable({ animals, lastAnimalIndex, lastAnimal })
				.then(saveData)
				.then(prepareObserver);
	}
}

fetch('animals.json')
		.then(getResponse)
		.then(populateTable)
		.then(saveData)
		.then(prepareObserver);

const zooOptions = {
	root: document.getElementById('viewport'),
	threshold: 1
}
const animalObserver = new IntersectionObserver(prepareToPopulateTable, zooOptions);

