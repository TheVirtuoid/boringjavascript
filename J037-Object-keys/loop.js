const myCat = {
	name: "Fluffy",
	breed: "Himalayan",
	arms: 0,
	legs: 4,
	tail: true,
	weight: 3.58
};

const myCatKeys = Object.keys(myCat);

console.log('myCat properties are:');
myCatKeys.forEach( key => console.log(`Key: ${key}\tValue: ${myCat[key]}`));

console.log('\n\nmyCat IN properties are:');
for(let key in myCat) {
	console.log(`Key: ${key}\tValue: ${myCat[key]}`);
}