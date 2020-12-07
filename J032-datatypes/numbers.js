const myInteger = 1;
const myFloat = 1.4;

const myBigInt = 1n;
const mySuperInt = 2n ** 68n;

console.log(`myInteger type is  ${typeof myInteger} with a value of ${myInteger}.`);
console.log(`myFloat type is ${typeof myFloat} with a value of ${myFloat}.`);
console.log(`myBigInt type is ${typeof myBigInt} with a value of ${myBigInt}`);

console.log(`\nMaximum Number Value:\t${Number.MAX_VALUE}`);
console.log(`Minimum Number Value:\t${Number.MIN_VALUE}`);
console.log(`Maximum Number Safe Integer:\t${Number.MAX_SAFE_INTEGER}`);
console.log(`Minimum Number Safe Integer:\t${Number.MIN_SAFE_INTEGER}`);
console.log(`Super int! ${mySuperInt}`);

