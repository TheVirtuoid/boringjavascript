const myCat = {
	"name": "Fluffy",
	"type": "Cat",
	"classification": "Mamallia",
};

const tail = Symbol('tail');
myCat[tail] = true;

const name = Reflect.get(myCat, 'name');
console.log(name);

const hasLegs = Reflect.has(myCat, 'type');
console.log(hasLegs);

const myCatKeys = Reflect.ownKeys(myCat);
console.log(myCatKeys);

const myCatPropertyDescriptor = Reflect.getOwnPropertyDescriptor(myCat, 'type');
console.log(myCatPropertyDescriptor);










/*

const tail = Symbol('tail');
myCat[tail] = true;

const name = Reflect.get(myCat, 'name');
console.log(name);

const hasLegs = Reflect.has(myCat, 'legs');
console.log(hasLegs);

const myCatKeys = Reflect.ownKeys(myCat);
console.log(myCatKeys);

const myCatPropertyDescriptor = Reflect.getOwnPropertyDescriptor(myCat, 'type');
console.log(myCatPropertyDescriptor);

*/
