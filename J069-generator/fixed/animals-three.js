import Reader from "./reader.js";
const animals = new Reader();
const ul = document.getElementById('animal-list-three');
const printData = (animals) => {
	let animal = animals.next();
	while (!animal.done) {
		ul.insertAdjacentHTML('beforeend', `<li>${animal.value.classification}</li>`);
		animal = animals.next();
	};
};
const printError = (err) => {
	ul.insertAdjacentHTML('beforeend', `<li>ERROR: ${err.message}</li>`);
}

animals.getData()
		.then(data => printData(animals.animals()))
		.catch(err => printError(err));


