import Dog from "./animals/Dog.js";
import Cat from "./animals/Cat.js";
import Bird from "./animals/Bird.js";

export default class Builder {
	constructor() {
		throw new Error('Builder is a static class. You cannot instantiate it.');
	}

	static buildCat(name) {
		return new Cat(name)
				.buildBody()
				.buildHead()
				.buildTail()
				.buildLegs();
	}

	static buildDog(name) {
		return new Dog(name)
				.buildBody()
				.buildHead()
				.buildTail()
				.buildLegs();
	}

	static buildBird(name) {
		return new Bird(name)
			.buildBody()
			.buildHead()
			.buildLegs()
			.buildWings();
	}

	static buildCatWithWheels(name) {
		return new Cat(name)
				.buildBody()
				.buildHead()
				.buildTail()
				.buildWheels();
	}

	static buildDogWithoutTail(name) {
		return new Dog(name)
				.buildBody()
				.buildHead()
				.buildLegs();
	}
}