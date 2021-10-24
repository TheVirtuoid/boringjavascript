import Reader from "./reader.js";
const animals = new Reader();
const ul = document.getElementById('animal-list-two');
const printData = (data) => {
	data.forEach( (animal) => {
		ul.insertAdjacentHTML('beforeend', `<li>${animal.name}</li>`);
	});
};
const printError = (err) => {
	ul.insertAdjacentHTML('beforeend', `<li>ERROR: ${err.message}</li>`);
}

animals.getData()
		.then(data => printData(data))
		.catch(err => printError(err));

