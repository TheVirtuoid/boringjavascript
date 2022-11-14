export default class Animal {
	#name;
	#type;

	constructor(args = {}) {
		const { name = 'Generic', type = 'Generic' } = args;
		this.#name = name;
		this.#type = type;
	}

	get name () {
		return this.#name;
	}

	get type () {
		return this.#type;
	}

	talk () {
		console.log(`${this.#name}, the ${this.type}, doesn't know how to talk.`);
	}
}