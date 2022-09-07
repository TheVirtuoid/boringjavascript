import AnimalDelivery from "./AnimalDelivery.js";

export default class Zoo {
	#deliveryService;
	#animals;
	#name;

	constructor(name) {
		this.#deliveryService = new AnimalDelivery();
		this.#animals = [];
		this.#name = name;
	}

	receiveAnimal() {
		this.#animals.push(this.#deliveryService.getAnimal());
	}

	showZoo() {
		console.log(`\nZoo: ${this.#name} (${this.#deliveryService.deliveryServiceId})`);
		console.log(`\t${'Name:'.padEnd(15)}Type:`);
		this.#animals.forEach((animal) => {
			console.log(`\t${animal.name.padEnd(15)}${animal.type}`);
		});
	}
}