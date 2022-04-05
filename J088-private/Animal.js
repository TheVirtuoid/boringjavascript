export default class Animal {
	name
	#type
	#classification

	constructor(animalData = {}) {
		const { name, type, classification } = animalData;
		this.name = name;
		this.#type = type;
		this.#classification = classification;
	}

	get type() {
		return this.#type;
	}

	get classification() {
		return this.#classification;
	}

}