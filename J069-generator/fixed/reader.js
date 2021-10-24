export default class Reader {
	isReady = false;
	data = null;

	getData() {
		return new Promise( (resolve, reject) => {
			fetch('./animals-other.json')
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

	* animals() {
		while (this.data.length) {
			const animal = this.data.shift();
			const { type, name, classification } = Object.values(animal)[0];
			yield { type, name, classification };
		}
	}

}

/*

	* animals() {
		while (this.data.length) {
			const animal = this.data.shift();
			yield animal;
		}
	}






	* animals() {
		while (this.data.length) {
			const { type, name, classification } = this.data.shift();
			yield { type, name, classification };
		}
	}



	* animals() {
		while (this.data.length) {
			const animal = this.data.shift();
			const { type, name, classification } = Object.values(animal)[0];
			yield { type, name, classification };
		}
	}



*/
