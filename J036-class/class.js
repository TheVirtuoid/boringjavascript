class Animal {
	constructor () {
		this.head = true;
		this.body = true;
		this.legs = 0;
		this.arms = 0;
		this.alive = false;
	}

	born () {
		this.alive = true;
	}
}

const myAnimal = new Animal();
const myOtherAnimal = new Animal();
myOtherAnimal.legs = 4;
myAnimal.born();
console.log(myAnimal);
console.log(myOtherAnimal);