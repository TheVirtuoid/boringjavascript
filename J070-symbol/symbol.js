const myCat = Symbol('Fluffy');
console.log(myCat);

const myDog = Symbol();
console.log(myDog);

const myOtherCat = Symbol('Fluffy');
console.log(myOtherCat);
console.log(`Is myCat the same as myOtherCat? ${myCat === myOtherCat ? "Yes!" : "No!" }`);

const myNumber = Symbol(1);
const myBoolean = Symbol(true);
const myObject = Symbol({ cat: "Fluffy" });
const myFunction = Symbol( () => { console.log('Inside myFunction') });
const mySymbol = Symbol(Symbol().toString());

console.log(myNumber);
console.log(myBoolean);
console.log(myObject);
console.log(myFunction);
console.log(mySymbol);

