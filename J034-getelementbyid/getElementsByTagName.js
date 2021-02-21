import { clearErrors, printErrors, validate, setupForm } from "./validate.js";

setupForm();
document.getElementById('profileForm').addEventListener('submit', processForm);

function processForm(event) {
	const errors = validate();
	if (errors.length > 0) {
		event.preventDefault();
		printErrors(errors);
		const allErrors = document.getElementsByTagName('li');
		document.getElementById('numErrors').textContent = `${allErrors.length} tagName`;
		document.getElementById('numErrorsPlural').textContent = `${allErrors.length === 1 ? '' : 's'}`;
		setupForm(false);
	} else {
		// normally, you would do nothing here. But I don't have server-side routines to
		// handle a submit, so I'm killing the submit here.
		event.preventDefault();
	}
}