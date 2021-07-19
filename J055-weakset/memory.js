let cats = new Set();

let fluffy = { type: 'cute' };
let mrTinkles = { type: 'devious' };

cats.add(fluffy);
cats.add(mrTinkles);
console.log(cats);

mrTinkles = null;

setTimeout( () => {
	console.log(cats);
}, 10000);

