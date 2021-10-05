const animalData = new Worker('./worker-event.js');
const ul = document.getElementById('list');

const processRecord = (data) => {
	return new Promise( (resolve, reject) => {
		const output = `${data.index} = ${data.record.type}`;
		const li = document.createElement('li');
		li.textContent = output;
		ul.appendChild(li);
		resolve(true);
	});
}

const wait = () => {
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			console.log('-done');
			resolve(true);
		}, 50);
	});
}

animalData.addEventListener('message', (event) => {
	console.log('in');
	processRecord(event.data)
			.then(wait);
});

