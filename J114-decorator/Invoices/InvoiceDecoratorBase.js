export default class InvoiceDecoratorBase {
	#component;

	constructor(component) {
		this.#component = component;
	}

	get component() {
		return this.#component;
	}

	printInvoice() {}

}