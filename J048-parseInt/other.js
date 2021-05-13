const base16 = "0x1ae0";
const scientificNotation = "6.1234e7";
const badString = "Cat";
const badString2 = "1Cat";
const bigNumber = "12345678901234567890n";

console.log(`Base16: ${parseInt(base16)}`);
console.log(`Scientific Notation: ${parseInt(scientificNotation)}`);
console.log(`Bad String:  ${parseInt(badString)}`);
console.log(`Bad String2: ${parseInt(badString2)}`);
console.log(`Big Number: Before = ${bigNumber}, After = ${parseInt(bigNumber)}`);
