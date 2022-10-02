export default class Bird {
	#name;
	#type;
	#body;
	#head;
	#legs;
	#wings;

	constructor(name) {
		this.#name = name;
		this.#type = 'bird';
	}

	get name() {
		return this.#name;
	}

	get type() {
		return this.#type;
	}

	get body() {
		return this.#body;
	}

	get head() {
		return this.#head;
	}

	get legs() {
		return this.#legs;
	}

	get wings() {
		return this.#wings;
	}

	buildBody() {
		this.#body = true;
		return this;
	}

	buildHead() {
		this.#head = true;
		return this;
	}

	buildLegs() {
		this.#legs = 2;
		return this;
	}

	buildWings() {
		this.#wings = 2;
		return this;
	}

}