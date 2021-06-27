import Animal from "./Animal.js";

const zoo = {};
for (let i = 0; i < 200; i++) {
	const name = `fluffy${i}`;
	const age = Math.floor(Math.random() * 5);
	zoo[name] = new Animal(name, age);
}

console.log(`Animal size before: ${Animal.mapSize}`);
for (let i = 5; i < 200; i++) {
	const name = `fluffy${i}`;
	delete zoo[name];
}

setTimeout( () => {
	console.log(`Animal size after: ${Animal.mapSize}`);
	for (const animal in zoo) {
		console.log(zoo[animal]);
	}
}, 5000);





