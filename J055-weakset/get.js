const myHouse = new WeakSet();

const cat = { name: 'Fluffy', age: 2 };
const dog = { name: 'Rover', age: 5 };
const lizard = { name: 'Larry', age: 3 };

myHouse.add(cat);
myHouse.add(dog);

console.log(`Is there a cat in my house?\t${myHouse.has(cat) ? 'Yes' : 'No'}`);
console.log(`Is there a dog in my house?\t${myHouse.has(dog) ? 'Yes' : 'No'}`);
console.log(`Is there a lizard in my house?\t${myHouse.has(lizard) ? 'Yes' : 'No'}`);


myHouse.delete(dog);
console.log('\n-------- The Dog Was Adopted ---------');
console.log(`Is there a dog in my house?\t${myHouse.has(dog) ? 'Yes' : 'No'}`);

