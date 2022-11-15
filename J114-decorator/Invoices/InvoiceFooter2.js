import InvoiceDecoratorBase from "./InvoiceDecoratorBase.js";

export default class InvoiceFooter2 extends InvoiceDecoratorBase {

	constructor(component) {
		super(component);
	}

	printInvoice () {
		this.component.printInvoice();
		console.log(`+-----------------+
| FOOTER 2        |		
+-----------------+`);
	}
}