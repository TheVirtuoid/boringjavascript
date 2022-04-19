const randomSeed = Math.random();
// const superBigNumber = 2n ** (128n - 1n) - 1n;
const superBigNumber = 100n;
console.log(superBigNumber, randomSeed);

const superRandomSeed = BigInt(Math.floor(randomSeed * 10000000000000000));
console.log(superRandomSeed);

const randomNumber = superBigNumber * superRandomSeed / 10000000000000000n;
console.log(randomNumber);

























/*
const superRandomSeed = BigInt(Math.floor(randomSeed * 10000000000000000));
console.log(superRandomSeed);

const randomNumber = superBigNumber * superRandomSeed / 10000000000000000n;
console.log(randomNumber);
*/
