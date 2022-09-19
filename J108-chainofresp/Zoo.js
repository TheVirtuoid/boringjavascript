export default class Zoo {
	#animals;
	#nextZoo;
	#name;

	constructor(args = {}) {
		const { animals, nextZoo = null, name } = args;
		this.#animals = animals;
		this.#nextZoo = nextZoo;
		this.#name = name;
		this.#animals.forEach((animal) => {
			animal.available = Math.random() < .25;
			animal.zooName = name;
		});
	}

	transferAnimal() {
		const animal = Math.floor(Math.random() * this.#animals.length);
		if (this.#animals[animal].available) {
			return this.#animals.splice(animal, 1)[0];
		} else if (this.#nextZoo) {
			return this.#nextZoo.transferAnimal();
		} else {
			return {};
		}
	}

	set nextZoo(zoo) {
		this.#nextZoo = zoo;
	}
}