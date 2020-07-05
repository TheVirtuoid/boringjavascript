class Enum {
	constructor(...expressions) {
		expressions.forEach( function (exp) {
			Object.defineProperty(this, exp.name, {
				get: function() { return exp.value; }
			});
		}, this);
	}
}

let animals = new Enum(
	{name: "Cat", value: 2},
	{name: "Dog", value: 4},
	{name: "Horse", value: 6}
);
console.log(`My Cat is ${animals.Cat}`);
console.log(`My Dog is ${animals.Dog}`);
console.log(`My Horse is ${animals.Horse}`);

