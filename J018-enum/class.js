class Enum {
	constructor(...expressions) {
		let value = 0;
		expressions.forEach( function (exp) {
			Object.defineProperty(this, exp, {
				enumerable: true,
				get: function() { return value; }
			});
			value++;
		}, this);
	}
}

let animals = new Enum("Cat", "Dog", "Horse");
console.log(`My Cat is ${animals.Cat}`);
console.log(`My Dog is ${animals.Dog}`);
console.log(`My Horse is ${animals.Horse}`);
console.log(animals);
