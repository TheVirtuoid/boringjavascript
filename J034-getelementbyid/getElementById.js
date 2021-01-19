import { clearErrors, printErrors, validate, setupForm } from "./validate.js";

setupForm();
const profileForm = document.getElementById('profileForm');
profileForm.addEventListener('submit', processForm);

function processForm(event) {
	const errors = validate();
	if (errors.length > 0) {
		event.preventDefault();
		document.getElementById('numErrors').textContent = `${errors.length}`;
		document.getElementById('numErrorsPlural').textContent = `${errors.length === 1 ? '' : 's'}`;
		printErrors(errors);
		setupForm(false);
	} else {
		// normally, you would do nothing here. But I don't have server-side routines to
		// handle a submit, so I'm killing the submit here.
		event.preventDefault();
	}
}