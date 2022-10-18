export default class AnimalRepo {

	#animals;
	#isReady = false;

	constructor(args = {}) {
		const { whenReady } = args;
		fetch('./animals-noclass.json')
				.then((response) => response.json())
				.then((data) => {
					this.#animals = data;
					this.#isReady = true;
					if (typeof whenReady === 'function') {
						whenReady();
					}
				});
	}

	addAnimal() {
		if (this.#isReady) {
			const animalToAddIndex = Math.floor(Math.random() * this.#animals.length);
			const animalToAdd = this.#animals.splice(animalToAddIndex, 1)[0];
			const rowToAdd = `<tr><td>${animalToAdd.type}</td><td>${animalToAdd.name}</td></tr>`;
			return rowToAdd;
		}
	}
}