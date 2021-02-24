const validate = () => {
	clearErrors();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	let errors = [];
	if (!name) errors.push('Name is required');
	if (!email) errors.push('Email is required');
	if (!phone) errors.push('Phone is required');
	return errors;
}

const printErrors = (errors) => {
	const errorDom = document.getElementById('errorMessages');
	const ul = errorDom.querySelector('ul');
	while (ul.firstChild) ul.removeChild(ul.firstChild);
	errors.forEach( (error) => ul.insertAdjacentHTML('afterbegin', `<li class="error">${error}</li>`));
	errorDom.classList.add('show');
}

const clearErrors = () => {
	const errorDom = document.getElementById('errorMessages');
	errorDom.classList.remove('show');
}

const setupForm = (clear = true) => {
	clear && clearErrors();
	document.getElementById('name').focus();
}

export { validate, printErrors, clearErrors, setupForm };