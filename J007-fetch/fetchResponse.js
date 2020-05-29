( () => {
	const button = document.getElementById('clickMe');
	button.addEventListener('click', getTheList);

	function getTheList (event) {
		fetch('/animals.json')
			.then(fetchResponse)
			.then(display)
			.catch(whoops);
	}

	function fetchResponse (response) {
		if (response.status !== 200) {
			throw new Error(`HTTP Response code error: ${response.status}`);
		} else {
			return Promise.resolve(response.json());
		}
	}

	function display (animals) {
		const list = document.getElementById('list');
		let ul = document.createElement('ul');
		animals.forEach( (animal) => {
			let li = document.createElement('li');
			li.textContent = animal.type;
			ul.appendChild(li);
		});
		list.appendChild(ul);
		return Promise.resolve(true);
	}

	function whoops (err) {
		document.getElementById('list').textContent = `ERROR: ${err.message}`;
	}
})();
