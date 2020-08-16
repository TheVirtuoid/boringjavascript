class Enum {
	constructor(...expressions) {
		expressions.forEach( function (exp) {
			Object.defineProperty(this, exp.name, {
				get: function() { return exp.value; }
			});
		}, this);
		Object.freeze(this);
	}
}

let animals = new Enum(
	{name: "Cat", value: 2},
	{name: "Dog", value: 4},
	{name: "Horse", value: 6}
);
console.log(`My cat is ${animals.Cat}`);
console.log(`My dog is ${animals.Dog}`);
console.log(`My horse is ${animals.Horse}`);

