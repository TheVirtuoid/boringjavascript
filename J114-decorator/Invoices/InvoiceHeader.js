import InvoiceDecoratorBase from "./InvoiceDecoratorBase.js";

export default class InvoiceHeader extends InvoiceDecoratorBase {

	constructor(component) {
		super(component);
	}

	printInvoice () {
		console.log(`+-----------------+
| HEADER 1        |		
+-----------------+`);
		this.component.printInvoice();
	}
}