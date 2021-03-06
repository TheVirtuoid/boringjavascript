document.getElementById('playing-field').addEventListener('click', processButton);
const routingTable = new Map();
routingTable.set('add', addClass);
routingTable.set('remove', removeClass);
routingTable.set('toggle', toggleClass);
routingTable.set('contains', containsClass);
const zoo = document.getElementById('zoo');
const classes = document.getElementById('classes');

function processButton(event) {
	if (event.target.tagName === 'BUTTON') {
		const label = event.target.closest('label');
		const routine = routingTable.get(label.id);
		if (routine) {
			routine(label);
		}
	}
}

function printClasses(highlight = "") {
	while (classes.firstChild) classes.removeChild(classes.firstChild);
	for (const className of zoo.classList.values()) {
		const addHighlight = highlight === className ? "highlight" : "";
		classes.insertAdjacentHTML('beforeend', `<li class="${addHighlight}">${className}</li>`);
	}
	document.querySelectorAll('#zoo span').forEach( animal => {
		if (animal.hasAttribute(highlight)) {
			animal.classList.add('highlight');
		} else {
			animal.classList.remove('highlight');
		}
	});
}

function addClass(label) {
	const className = label.querySelector('input').value.split(',');
	zoo.classList.add(...className);
	printClasses();
}

function removeClass(label) {
	const className = label.querySelector('input').value.split(',');
	zoo.classList.remove(...className);
	printClasses();
}

function toggleClass(label) {
	const className = label.querySelector('input').value;
	zoo.classList.toggle(className);
	printClasses();
}

function containsClass(label) {
	const className = label.querySelector('input').value;
	let highlight;
	if (zoo.classList.contains(className)) {
		highlight = className
	} else {
		highlight = "";
	}
	printClasses(highlight);
}