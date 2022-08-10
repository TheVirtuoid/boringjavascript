import Cat from "./Cat.js";
import Dog from "./Dog.js";
import Horse from "./Horse.js";

let animalClearingHouse = null;

export default class AnimalClearingHouse {

	constructor(type, args) {
		if (animalClearingHouse !== null) {
			throw new Error('AnimalClearingHouse is a singleton instance and cannot be instantiated more than once.');
		}
		animalClearingHouse = this;
		return;
	}

	addAnimal(type, args) {
		const { name, age, height, weight } = args;
		let instance = null;
		switch(type) {
			case 'cat':
				instance = new Cat({ name, age, height, weight });
				break;
			case 'dog':
				instance = new Dog(name, age, height, weight);
				break;
			case 'horse':
				instance = new Horse();
				instance.name = name;
				instance.age = age;
				instance.height = height;
				instance.weight = weight;
				break;
		}
		return instance;
	}
}