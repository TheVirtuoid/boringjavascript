import Reader from "./reader.js";
const animals = new Reader();
const ul = document.getElementById('animal-list-one');
const printData = (data) => {
	data.forEach( (animal) => {
		ul.insertAdjacentHTML('beforeend', `<li>${animal.type}</li>`);
	});
};
const printError = (err) => {
	ul.insertAdjacentHTML('beforeend', `<li>ERROR: ${err.message}</li>`);
}

animals.getData()
		.then(data => printData(data))
		.catch(err => printError(err));


