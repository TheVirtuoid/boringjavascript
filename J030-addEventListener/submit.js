const usernameDom = document.getElementById('username');
const passwordDom = document.getElementById('password');
const errorMessageDom = document.getElementById('errorMessage');
const successDom = document.getElementById('success');
const formDom = document.getElementById('form');


usernameDom.addEventListener('focusout', validateUsername);
passwordDom.addEventListener('focusout', validatePassword);
formDom.addEventListener('submit', submit);

usernameDom.focus();

function validateUsername(event) {
	clearError();
	const username = usernameDom.value;
	if (username === "") {
		displayError('You need to enter something as a username');
		return false;
	} else {
		// you might want to check here for hackers!
		return true;
	}
}

function validatePassword(event) {
	clearError();
	const password = passwordDom.value;
	if (password === "") {
		displayError('You need to enter something as a password');
		return false;
	} else if (password.length < 8) {
		displayError('The password must be at least 8 characters');
		return false;
	} else {
		// you can check for other things here, like special characters, etc.
		return true;
	}
}

function submit(event) {
	event.preventDefault();
	clearError();
	// you don't really need to check the validates here again.
	// Here is where you will actually send the login request to the
	// server.
	if (validateUsername() && validatePassword()) {
		showSuccess();
	} else {
		displayError('WHOOPS! Something went wrong!')
	}
}

function displayError(message) {
	errorMessageDom.textContent = message;
	errorMessageDom.classList.add('show');
}

function clearError() {
	errorMessageDom.classList.remove('show');
	errorMessageDom.textContent = "";
}

function showSuccess() {
	successDom.classList.add('show');
}