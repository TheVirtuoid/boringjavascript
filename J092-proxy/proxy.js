import Animal from "./Animal.js";

const proxyHandler = {
	get(target, property, receiver) {
		if (property === 'name') {
			return target.name.toUpperCase();
		} else {
			return Reflect.get(...arguments);
		}
	},
	set(target, property, value) {
		if (property === 'type' && !['Cat', 'Dog', 'Fish'].includes(value)) {
			console.log('\nERROR: We can only accept Cat, Dog, and Fish!\n');
			return true;
		} else {
			target[property] = value;
			return true;
		}
	}
}

const animal = new Animal({ name: 'Fluffy', type: 'Cat', classification: 'Mammalia' });

const myCat = new Proxy(animal, proxyHandler);

console.log(`My cat's name is ${myCat.name}.`);
console.log(`Before moving, my cat was at (${myCat.position.x},${myCat.position.y}).`);
myCat.moveRight();
console.log(`After moving, my cat was at (${myCat.position.x},${myCat.position.y}).`);

myCat.type = 'Dog';
console.log(myCat.type);



/*

	set(target, property, value) {
		if (property === 'type' && !['Cat', 'Dog', 'Fish'].includes(value)) {
			console.log('\nERROR: We can only accept Cat, Dog, and Fish!\n');
			return true;
		} else {
			target[prop] = value;
			return true;
		}
	}


myCat.type = 'Gorilla';
console.log(myCat.type);

 */