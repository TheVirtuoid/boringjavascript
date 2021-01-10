class BoringClass {
	constructor () {
		this.amIBored = true;
	}

	getBored () {
		return this.amIBored;
	}

	setBoard (boredom) {
		this.amIBored = boredom;
	}
}

const myArray = [ 1, 2, 3 ];
const myObject = { a: 1 };
const boredom = new BoringClass();

console.log(`myArray = Array?\t${myArray instanceof Array}`);
console.log(`myObject = Object?\t${myObject instanceof Object}`);
console.log(`boredom = BoringClass?\t${boredom instanceof BoringClass}`);
console.log(`myObject = Number?\t${myObject instanceof Number}`);

/*
class SuperBoring extends BoringClass {
	constructor () {
		super();
		this.reallyBored = true;
	}
}

const superBored = new SuperBoring();
console.log(`superBored = SuperBoring?\t${superBored instanceof SuperBoring}`);
console.log(`superBored = BoringClass?\t${superBored instanceof BoringClass}`);
console.log(`superBored = Object?\t\t${superBored instanceof Object}`);
*/
// console.log(superBored.constructor.name);
