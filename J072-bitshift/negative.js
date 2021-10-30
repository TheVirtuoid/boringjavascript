import printBinary from "./printBinary.js";
import toBinaryString from "./toBinaryString.js";

const myNumber = -2;
const leftShiftNumber = myNumber << 1;

console.log(`myNumber ${myNumber}\n${printBinary(myNumber)}\n`);
console.log(`leftShiftNumber ${leftShiftNumber}\n${printBinary(leftShiftNumber)}`);

console.log(toBinaryString(myNumber));

