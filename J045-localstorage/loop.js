const generate = document.getElementById('generate');
const results = document.getElementById('results');
const remove = document.getElementById('remove');
const clear = document.getElementById('clear');
const keyToRemove = document.getElementById('keyToRemove');

generate.addEventListener('click', generateList);
remove.addEventListener('click', removeItem);
clear.addEventListener('click', clearAll);

function generateList(event) {
	event.preventDefault();
	for(let i = 0; i < 10; i++) {
		const key = getRandomKey();
		const value = getRandomValue();
		localStorage.setItem(key, value);
	}
	displayList();
	results.classList.add('show');
}

function removeItem (event) {
	event.preventDefault();
	const key = keyToRemove.value;
	const item = localStorage.getItem(key);
	if (item) {
		localStorage.removeItem(key);
		displayList();
	}
	keyToRemove.value = "";
}

function clearAll(event) {
	event.preventDefault();
	localStorage.clear();
	displayList();
}

function displayList() {
	while(results.firstChild) results.removeChild(results.firstChild);
	const storageLength = localStorage.length;
	for(let i = 0; i < storageLength; i++) {
		const key = localStorage.key(i);
		const value = localStorage.getItem(key);
		const li = document.createElement('li');
		li.textContent = `${key} = ${value}`;
		results.appendChild(li);
	}
}

function getRandomKey() {
	return getRandomString(5, 26, 64);
}

function getRandomValue() {
	return getRandomString(15, 94, 32);
}

function getRandomString(numCharacters, size, offset) {
	let randomString = "";
	const characterLoop = Math.ceil(Math.random() * numCharacters);
	for(let i = 0; i < characterLoop; i++) {
		const code = Math.ceil(Math.random() * size) + offset;
		randomString = `${randomString}${String.fromCharCode(code)}`;
	}
	return randomString;
}