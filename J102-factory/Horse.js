export default class Horse {

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

	set name(name) {
		this.#name = name;
	}

	set age(age) {
		this.#age = age;
	}

	set height(height) {
		this.#height = height * 10.16;
	}

	set weight(weight) {
		this.#weight = weight;
	}

	get name () {
		return this.#name;
	}

	get age () {
		return this.#age;
	}

	get height () {
		return this.#height / 10.16;
	}

	get weight () {
		return this.#weight;
	}

	talk () {
		return 'Neigh';
	}
}