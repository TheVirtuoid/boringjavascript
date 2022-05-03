import { zoo } from './zoo.js';

const reverseNameGetProxy = {
	apply: function(target, thisArg, args) {
		const [ name, type ] = args;
		return target(name.split('').reverse().join(''), type);
	}
}

const createAnimalReverse = new Proxy(zoo.createAnimal, reverseNameGetProxy);

const myCat = createAnimalReverse('Fluffy');
console.log(`Prefix: ${zoo.nameWithPrefix(myCat)}`);
console.log(`Suffix: ${zoo.nameWithSuffix(myCat)}`);
console.log(`Both  : ${zoo.nameWithPrefixAndSuffix(myCat)}`);

const myDog = zoo.createAnimal('Fido');
console.log(`Prefix: ${zoo.nameWithPrefix(myDog)}`);
console.log(`Suffix: ${zoo.nameWithSuffix(myDog)}`);
console.log(`Both  : ${zoo.nameWithPrefixAndSuffix(myDog)}`);

/*
zoo.createAnimal = function(name, type = '') {
	return { name: name.split('').reverse().join(''), type };
}

const myCat = zoo.createAnimal('Fluffy');

console.log(`Prefix: ${zoo.nameWithPrefix(myCat)}`);
console.log(`Suffix: ${zoo.nameWithSuffix(myCat)}`);
console.log(`Both  : ${zoo.nameWithPrefixAndSuffix(myCat)}`);
*/

















/*

zoo.createAnimal = function(name, type = '') {
	return { name: name.split('').reverse().join(''), type };
}




const reverseNameGetProxy = {
	apply: function(target, thisArg, args) {
		const [ name, type ] = args;
		return target(name.split('').reverse().join(''), type);
	}
}

const createAnimalReverse = new Proxy(zoo.createAnimal, reverseNameGetProxy);

const myCat = createAnimalReverse('Fluffy');
console.log(`Prefix: ${zoo.nameWithPrefix(myCat)}`);
console.log(`Suffix: ${zoo.nameWithSuffix(myCat)}`);
console.log(`Both  : ${zoo.nameWithPrefixAndSuffix(myCat)}`);

const myDog = zoo.createAnimal('Fido');
console.log(`Prefix: ${zoo.nameWithPrefix(myDog)}`);
console.log(`Suffix: ${zoo.nameWithSuffix(myDog)}`);
console.log(`Both  : ${zoo.nameWithPrefixAndSuffix(myDog)}`);

 */