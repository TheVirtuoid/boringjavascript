export default class ValidBase {

	#value;
	#valid;

	constructor(component) {
		this.#value = component.value;
		this.#valid = component.valid;
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