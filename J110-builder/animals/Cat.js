export default class Cat {
	#name;
	#type;
	#body;
	#head;
	#legs;
	#wheels;
	#tail;

	constructor(name) {
		this.#name = name;
		this.#type = 'cat';
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

	get wheels() {
		return this.#wheels;
	}

	get tail() {
		return this.#tail;
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
		this.#legs = 4;
		this.#wheels = 0;
		return this;
	}

	buildTail() {
		this.#tail = true;
		return this;
	}

	buildWheels() {
		this.#wheels = 4;
		this.#legs = 0;
		return this;
	}
}