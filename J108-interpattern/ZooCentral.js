import { readFileSync } from 'fs';
import Zoo from './Zoo.js';

export default class ZooCentral {
	#zoos;
	#firstZoo;
	#transferAnimalGenerator;

	constructor() {
		let oldZoo = null;
		this.#firstZoo = null;
		this.#zoos = new Map();
		const zoos = JSON.parse(readFileSync('./animals-noclass.json').toString());
		zoos.forEach((zoo) => {
			const { name, animals } = zoo;
			const newZoo = new Zoo({ name, animals });
			if (oldZoo) {
				oldZoo.nextZoo = newZoo;
				this.#zoos.set(oldZoo.name, oldZoo);
			}
			this.#zoos.set(name, newZoo);
			this.#firstZoo = this.#firstZoo ?? newZoo;
			oldZoo = newZoo;
		});
		this.#transferAnimalGenerator = this.#iterableGenerator();
	}

	* #iterableGenerator () {
		while (true) {
			yield this.#firstZoo.transferAnimal();
		}
	}

	getTransferAnimal() {
		return this.#transferAnimalGenerator.next();
	}
}