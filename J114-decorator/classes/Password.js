export default class Password {
	#value;
	#valid;

	constructor(args = {}) {
		const { value } = args;
		this.#value = value ?? '';
		this.#valid = [];
	}

	get value() {
		return this.#value;
	}

	get valid() {
		return this.#valid;
	}

	isValid() {
		return this.#valid.length === 0;
	}
}