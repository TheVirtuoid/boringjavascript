/* Numbers a BigInts as NOT exactly the same! */
console.log(`Strict Equality (===): ${(1n === 1)}`);

/* But can be loosely equated or compared */
console.log(`Normal Equality (==) : ${(1n == 1)}`);
console.log(`Comparing (<): ${(2n < 3)}`);

/* They CANNOT share the same equation */
// console.log(`Adding 2 + 2: ${2n + 2}`);

/* Nor can you use BigInt as arguments where you expect numbers. */
//console.log(`Substring: ${'abcdefg'.substring(0, 2n)}`);

/* Divisions that leave a fractional part will be truncated */
console.log(`Truncation (5/2): ${(5n / 2n)}`);























/* But can be loosely equated or compared */
//console.log(`Normal Equality (==) : ${(1n == 1)}`);
//console.log(`Comparing (<): ${(2n < 3)}`);

/* They CANNOT share the same equation */
//console.log(`Adding 2 + 2: ${2n + 2}`);

/* Nor can you use BigInt as arguments where you expect numbers. */
//console.log(`Substring: ${'abcdefg'.substring(0, 2n)}`);

/* Divisions that leave a fractional part will be truncated */
// console.log(`Truncation (5/2): ${(5n / 2n)}`);
