class Enum {
	constructor(...expressions) {
		let value = 0;
		expressions.forEach( function (exp) {
			let newValue = value;
			Object.defineProperty(this, exp, {
				enumerable: true,
				get: function() { return newValue; }
			});
			value++;
		}, this);
		Object.freeze(this);
	}
}

let animals = new Enum("Cat", "Dog", "Horse");
console.log(`My cat is ${animals.Cat}`);
console.log(`My dog is ${animals.Dog}`);
console.log(`My horse is ${animals.Horse}`);
