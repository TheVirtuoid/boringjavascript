const mySymbolNumber = Symbol(1);
const mySymbolString = Symbol("test");
const mySymbolObject = Symbol({ a: 1 });
const myOtherSymbolNumber = Symbol(1);

console.log(`mySymbolNumber type='${typeof mySymbolNumber}' (${mySymbolNumber.toString()})`);
console.log(`mySymbolString type='${typeof mySymbolString}' (${mySymbolString.toString()})`);
console.log(`mySymbolObject type='${typeof mySymbolObject}' (${mySymbolObject.toString()})`);
console.log(`Are they equal? ${mySymbolNumber === myOtherSymbolNumber ? 'YES!' : 'NO!'}`);