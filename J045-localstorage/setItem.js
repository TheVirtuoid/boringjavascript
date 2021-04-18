const key = document.getElementById('key');
const value = document.getElementById('value');
const submit = document.getElementById('submit');
const results = document.getElementById('results');
const keyValue = document.getElementById('keyValue');
const valueValue = document.getElementById('valueValue');
const check = document.getElementById('check');

submit.addEventListener('click', processSubmit);
check.addEventListener('click', processCheck);

function processSubmit(event) {
	event.preventDefault();
	const lsKey = key.value;
	const lsValue = value.value;
	localStorage.setItem(lsKey, lsValue);
	keyValue.textContent = lsKey;
	valueValue.textContent = lsValue;
	results.classList.add('show');
}

function processCheck(event) {
	event.preventDefault();
	const checkValue = localStorage.getItem(key.value);
	check.textContent = checkValue;
}