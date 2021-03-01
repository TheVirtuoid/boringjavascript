import Animal from './Animal.js';

class Cat extends Animal {
	constructor() {
		super();
		this.tail = true;
	}

	speak() {
		// whatever JavaScript code plays an audio of a 'meow'
	}

	born() {
		super.born();
		this.legs = 4;
	}
}

const myCat = new Cat();
console.log(myCat);