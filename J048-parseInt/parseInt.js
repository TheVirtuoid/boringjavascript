const stringNumber = "1234";
const number = parseInt(stringNumber);
const number10 = parseInt(stringNumber, 10);
const number16 = parseInt(stringNumber, 16);
const number8 = parseInt(stringNumber, 8);
const number2 = parseInt(stringNumber, 2);

console.log(`Number by Default: ${number}`);
console.log(`Number in Base 10: ${number10}`);
console.log(`Number in Base 16: ${number16}`);
console.log(`Number in Base 8:  ${number8}`);
console.log(`Number in Base 2:  ${number2}`);