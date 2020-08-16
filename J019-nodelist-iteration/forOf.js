const animalList = document.getElementById('animalList');
const goButton = document.getElementById('go');
const results = document.getElementById('results');
goButton.addEventListener('click', processList);

function processList(event) {
	let animalCount = 0;
	let multiNameCount = 0;
	const animalNodeList = animalList.querySelectorAll('li');
	for (let animal of animalNodeList) {
		const animalType = animal.querySelector('span.type').textContent;
		const animalName = animal.querySelector('span.name').textContent;
		if (animalType.toLowerCase().startsWith('c')) {
			animalCount++;
		}
		if (animalName.split(' ').length > 1) {
			multiNameCount++;
		}
	}
	results.innerHTML = `<p>Number animals starts with "c": ${animalCount}.</p><p>Number multi-word named: ${multiNameCount}.</p>`;
	results.classList.remove('hide');
}
