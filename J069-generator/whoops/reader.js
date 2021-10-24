export default class Reader {
	isReady = false;
	data = null;

	getData() {
		return new Promise( (resolve, reject) => {
			fetch('./animals.json')
					.then(response => response.json())
					.then(data => this.saveData(data))
					.then(resolve)
					.catch(reject)
		});
	}

	saveData(data) {
		this.isReady = true;
		this.data = data;
		return this.data;
	}

}
