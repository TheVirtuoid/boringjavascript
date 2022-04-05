export default class Child {
	name;
	#age;

	constructor(childParameters = {}) {
		const { name, age } = childParameters;
		this.name = name;
		this.#age = age;
	}

	getAge() {
		return this.#age;
	}

	#getAgeInMonths() {
		return this.#age * 12;
	}

	getAllAges() {
		return { years: this.#age, months: this.#getAgeInMonths() }
	}
}
