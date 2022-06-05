const myCat = {
	name: 'Fluffy',
	type: 'Cat',
	tail: true,
	legs: 4
}

myCat[Symbol.iterator] = function * () {
	for(const key of Object.getOwnPropertyNames(myCat)) {
		yield [key, myCat[key]];
	}
}

console.log('My Cat');
console.log([...myCat]);