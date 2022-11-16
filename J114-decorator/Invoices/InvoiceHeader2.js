import InvoiceDecoratorBase from "./InvoiceDecoratorBase.js";

export default class InvoiceHeader2 extends InvoiceDecoratorBase {

	constructor(component) {
		super(component);
	}

	printInvoice () {
		console.log(`+-----------------+
| HEADER 2        |		
+-----------------+`);
		this.component.printInvoice();
	}
}