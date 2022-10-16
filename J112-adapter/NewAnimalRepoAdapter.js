import NewAnimalRepo from "./NewAnimalRepo.js";

export default class NewAnimalRepoAdapter {

	#instance;

	constructor(args = {}) {
		const { whenReady } = args;
		this.#instance = new NewAnimalRepo();
		this.#waitForTheReady()
				.then(() => {
					if (typeof whenReady === 'function') {
						whenReady();
					}
				})
				.catch((err) => {
					console.log('got an error');
				});
	}

	#waitForTheReady() {
		let timeout = 5000;
		const self = this;
		return new Promise((resolve, reject) => {
			const timer = setInterval(() => {
				timeout -= 100;
				if (self.#instance.isReady || timeout === 0) {
					clearInterval(timer);
					if (self.#instance.isReady) {
						resolve();
					} else {
						reject();
					}
				}
			}, 100);
		});
	}

	addAnimal() {
		const animalToAdd = this.#instance.retrieveAnimalFromRepository();
		return `<tr><td>${animalToAdd.type}</td><td>${animalToAdd.name}</td></tr>`;
	}
}