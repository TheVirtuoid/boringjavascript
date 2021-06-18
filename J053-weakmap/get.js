const myMap = new WeakMap();
const myCat = { name: 'Fluffy', size: 'small', breed: 'shorthair' };

myMap.set(myCat, { location: 'home' });
console.log(myMap.get(myCat));

console.log(myMap.has(myCat));
