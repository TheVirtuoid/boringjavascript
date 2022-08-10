export default class Dog {

	#name;
	#age;
	#height;
	#weight;

	constructor(name, age, height, weight) {
		this.#name = name;
		this.#age = age;
		this.#height = height;
		this.#weight = weight;
	}

	get name () {
		return this.#name;
	}

	get age () {
		return this.#age;
	}

	get height () {
		return this.#height;
	}

	get weight () {
		return this.#weight;
	}

	talk () {
		return 'Bark';
	}
}