export default class Dog {
	#name;
	#type;
	#body;
	#head;
	#legs;
	#tail;

	constructor(name) {
		this.#name = name;
		this.#type = 'dog';
	}

	get name () {
		return this.#name;
	}

	get type () {
		return this.#type;
	}

	get body () {
		return this.#body;
	}

	get head () {
		return this.#head;
	}

	get legs () {
		return this.#legs;
	}

	get tail () {
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
		return this;
	}

	buildTail() {
		this.#tail = true;
		return this;
	}

}