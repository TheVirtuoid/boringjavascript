import { readFileSync } from 'fs';
import Zoo from './Zoo';

export default class ZooCentral {
	#zoos;

	constructor() {
		let oldZoo = null;
		this.#zoos = new Map();
		const zoos = JSON.parse(readFileSync('./animals-noclass.json').toString());
		zoos.forEach((zoo, index) => {
			const { name, animals } = zoo;
			const newZoo = new Zoo({ name, animals });
			if (index < zoos.length - 1) {
				oldZoo.nextZoo = newZoo;
				this.#zoos.set(oldZoo.name, oldZoo);
			}
			this.#zoos.set(name, newZoo);
			oldZoo = newZoo;
		});
	}
}