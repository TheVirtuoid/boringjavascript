import printBinary from "./printBinary.js";

const myNumber = 1;
const yourNumber = 3;
const orNumber = myNumber | yourNumber;

console.log(`myNumber:  ${myNumber}\n${printBinary(myNumber)}\n`);
console.log(`yourNumber:  ${yourNumber}\n${printBinary(yourNumber)}\n`);
console.log(`orNumber: ${orNumber}\n${printBinary(orNumber)}`)