import InvoiceBase from "./Invoices/InvoiceBase.js";

let myInvoice = new InvoiceBase();
myInvoice.printInvoice();

/*

import InvoiceBase from "./Invoices/InvoiceBase.js";

let myInvoice = new InvoiceBase();
myInvoice.printInvoice();


 */

/*

import InvoiceBase from "./Invoices/InvoiceBase.js";
import InvoiceHeader from "./Invoices/InvoiceHeader.js";
import InvoiceFooter from "./Invoices/InvoiceFooter.js";

let myInvoice = new InvoiceBase();
myInvoice = new InvoiceHeader(myInvoice);
myInvoice = new InvoiceFooter(myInvoice);
myInvoice.printInvoice();


 */

/*

import InvoiceBase from "./Invoices/InvoiceBase.js";
import InvoiceHeader2 from "./Invoices/InvoiceHeader2.js";
import InvoiceHeader from "./Invoices/InvoiceHeader.js";
import InvoiceFooter2 from "./Invoices/InvoiceFooter2.js";

let myInvoice = new InvoiceBase();
myInvoice = new InvoiceHeader2(myInvoice);
myInvoice = new InvoiceHeader(myInvoice);
myInvoice = new InvoiceFooter2(myInvoice);
myInvoice.printInvoice();
 */