console.log('------------------- map -------------------')
const myMap = new Map();
myMap.set('cat', { name: 'Fluffy', weight: 4.5 });
myMap.set('dog', { name: 'Rover', weight: 24.7 });
myMap.set('lizard', { name: 'Larry', weight: .75 });
const myArrayMap = Array.from(myMap, (animal, index) => {
	let [ key, value ] = animal;
	let { name, weight } = value;
	weight *= 2.20462;
	return { type: key, name, weight };
});
console.log(myArrayMap);

const myRandomFor = [];
for(let x = 0, l = 10; x < l; x++) {
	myRandomFor.push(Math.ceil(Math.random() * 10));
}
console.log(myRandomFor);
const getRandomNumbers = () => Array.from({ length: 10 }, (value, index) => Math.ceil(Math.random() * 10));
console.log(getRandomNumbers());