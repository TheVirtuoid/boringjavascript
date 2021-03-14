class Animal {
	constructor () {
		this.body = true;
		this.head = true;
		this.legs = 0;
		this.alive = false;
	}

	born () {
		this.alive = true;
	}
}

const myCat = new Animal();
console.log(Object.keys(myCat));
console.log(myCat.constructor);















//console.log(myCat.constructor);
