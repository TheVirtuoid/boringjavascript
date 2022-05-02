import { zoo } from './zoo.js';

const myCat = zoo.createAnimal('Fluffy');
console.log(`Prefix: ${zoo.nameWithPrefix(myCat)}`);
console.log(`Suffix: ${zoo.nameWithSuffix(myCat)}`);
console.log(`Both  : ${zoo.nameWithPrefixAndSuffix(myCat)}`);
console.log('And my keys are:');
console.log(Object.getOwnPropertyNames(myCat));


/*
const nameGetProxy = {
	get(target, property, receiver) {
		const value = Reflect.get(...arguments);
		return property === 'name' ? target.name.split('').reverse().join('') : value;
	},
	ownKeys(target) {
		return [name];
	}
}

const zooProxy = new Proxy(zoo, nameGetProxy);

const myCat = zooProxy.createAnimal('Fluffy');
console.log(`Prefix: ${zooProxy.nameWithPrefix(myCat)}`);
console.log(`Suffix: ${zooProxy.nameWithSuffix(myCat)}`);
console.log(`Both  : ${zooProxy.nameWithPrefixAndSuffix(myCat)}`);

const myDog = zoo.createAnimal('Fido');
console.log(`Prefix: ${zoo.nameWithPrefix(myDog)}`);
console.log(`Suffix: ${zoo.nameWithSuffix(myDog)}`);
console.log(`Both  : ${zoo.nameWithPrefixAndSuffix(myDog)}`);
console.log('And my keys are:');
console.log(Object.getOwnPropertyNames(myCat));
 */