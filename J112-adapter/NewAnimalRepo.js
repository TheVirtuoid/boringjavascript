export default class NewAnimalRepo {

	#animals;
	#isReady = false;

	constructor() {
		fetch('./animals-noclass.json')
				.then((response) => response.json())
				.then((data) => {
					this.#animals = data;
					this.#isReady = true;
				});
	}

	get isReady () {
		return this.#isReady;
	}

	retrieveAnimalFromRepository() {
		if (this.#isReady) {
			const animalToAddIndex = Math.floor(Math.random() * this.#animals.length);
			const animalToAdd = this.#animals.splice(animalToAddIndex, 1)[0];
			return animalToAdd;
		}
	}
}