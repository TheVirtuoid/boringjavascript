const myCat = "Fluffy";
const thirdCharacter = myCat.charAt(2);
console.log(`\nThe third character in my cat's name is "${thirdCharacter}".`);

console.log(`No arg   = "${myCat.charAt()}".`);
console.log(`-1       = "${myCat.charAt(-1)}".`);
console.log(`1000     = "${myCat.charAt(1000)}".`);
console.log(`String 2 = "${myCat.charAt("2")}".`);
console.log(`String   = "${myCat.charAt("Cat")}".`);
console.log(`true     = "${myCat.charAt(true)}".`);
console.log(`false    = "${myCat.charAt(false)}".`);
console.log(`Object   = "${myCat.charAt({ cat: 1 })}".`);























/*
console.log(`No arg = "${myCat.charAt()}".`);
console.log(`-1 = "${myCat.charAt(-1)}".`);
console.log(`1000 = "${myCat.charAt(1000)}".`);
console.log(`String 2 = "${myCat.charAt("2")}".`);
console.log(`true = "${myCat.charAt(true)}".`);
console.log(`false = "${myCat.charAt(false)}".`);
console.log(`Object = "${myCat.charAt({ cat: 1 })}".`);
*/
