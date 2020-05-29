( () => {
	const buttonNames = document.getElementById('clickMeName');
	const buttonTypes = document.getElementById('clickMeType');
	buttonNames.addEventListener('click', getTheNameList);
	buttonTypes.addEventListener('click', getTheTypeList);

	function getTheNameList (event) {
		getTheList('/snippets/animalNames.html');
	}

	function getTheTypeList (event) {
		getTheList('/snippets/animalTypes.html');
	}

	function getTheList (fileName) {
		fetch(fileName)
			.then( response => response.text())
			.then(display)
			.catch(whoops);
	}

	function display (animals) {
		const list = document.getElementById('list');
		list.innerHTML = animals;
	}

	function whoops (err) {
		document.getElementById('list').textContent = `ERROR: ${err.message}`;
	}
})();
