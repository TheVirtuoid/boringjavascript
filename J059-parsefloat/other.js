const base16 = "0x1ae0";
console.log(`Base16: ${parseFloat(base16)}`);

const scientificNotation = "6.1234e7";
console.log(`Scientific Notation: ${parseFloat(scientificNotation)}`);

const badString = "Cat";
console.log(`Bad String:  ${parseFloat(badString)}`);

const badString2 = "1.2Cat";
console.log(`Bad String2: ${parseFloat(badString2)}`);

const bigNumber = "12345678901234567890n";
console.log(`Big Number: Before = ${bigNumber}, After = ${parseFloat(bigNumber)}`);

console.log(`Boolean: ${parseFloat(true)}`);
console.log(`NaN: ${parseFloat(NaN)}`);
console.log(`null: ${parseFloat(null)}`);
console.log(`undefined: ${parseFloat(undefined)}`);
console.log(`Object: ${parseFloat({ cat: 'Fluffy' })}`);
