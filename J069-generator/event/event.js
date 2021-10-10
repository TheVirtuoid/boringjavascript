const animalData = new Worker('./worker-event.js');
const ul = document.getElementById('list');

const processRecord = (data) => {
	const output = `${data.index} = ${data.record.type}`;
	const li = document.createElement('li');
	li.textContent = output;
	ul.appendChild(li);
}

animalData.addEventListener('message', (event) => {
	processRecord(event.data);
});
