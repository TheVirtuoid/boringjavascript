// import AnimalRepo from './AnimalRepo.js';
import AnimalRepo from './NewAnimalRepoAdapter.js';

const tbody = document.querySelector('table tbody');
const fillZooButton = document.getElementById('fill-zoo');
const animalRepo = new AnimalRepo({ whenReady: () => {
	fillZooButton.removeAttribute('disabled');
	} });

const fillTheZoo = () => {
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
	tbody.insertAdjacentHTML('afterbegin', animalRepo.addAnimal());
};

fillZooButton.addEventListener('click', fillTheZoo);


