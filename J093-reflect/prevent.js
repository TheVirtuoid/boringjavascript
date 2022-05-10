const myCat = {
	"name": "Hope",
	"type": "Cat",
	"classification": "Mamallia",
};

Reflect.defineProperty(myCat, 'tail', {value: true, enumerable: true});
console.log(myCat);
console.log(myCat.tail);
console.log(Reflect.getOwnPropertyDescriptor(myCat, 'tail'));

















/*
myCat.ugly = true;



Reflect.preventExtensions(myCat)

myCat.tail = true;

console.log(myCat);

Reflect.defineProperty(myCat, 'tail', {value: true});
console.log(myCat);

*/
