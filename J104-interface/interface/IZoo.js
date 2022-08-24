export default class IZoo {

	constructor() {
		if (!([this.addAnimal, this.removeAnimal, this.changeAnimal].every((animal) => {
			const functionString = animal.toString().replace(/[\s\r\n]/g, '');
			return functionString.substring(functionString.length - 2) !== '{}';
		}))) {
			throw new Error('Not all methods have been defined by your class. See the IZoo interface for details.');
		}
	}

	addAnimal(animal) {}

	removeAnimal(animal) {}

	changeAnimal(animal) {}
}