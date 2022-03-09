import printBinary from "./printBinary.js";

const myNumber = -1;
const yourNumber = -3;
const xorNumber = myNumber ^ yourNumber;

console.log(`myNumber:  ${myNumber}\n${printBinary(myNumber)}\n`);
console.log(`yourNumber:  ${yourNumber}\n${printBinary(yourNumber)}\n`);
console.log(`xorNumber: ${xorNumber}\n${printBinary(xorNumber)}`)