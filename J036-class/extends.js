// import Animal from './Animal.js');
const Animal = require('./Animal.js');

class Cat extends Animal {
	constructor() {
		super();
		this.tail = true;
	}

	speak() {
		// whatever JavaScript code plays an audio of a 'meow'
		console.log('meow!');
	}

	born() {
		super.born();
		this.legs = 4;
	}
}

const myCat = new Cat();
myCat.born();
console.log(myCat);
myCat.speak();


