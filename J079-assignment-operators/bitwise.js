let myNumber = 1;
let yourNumber = 1;

myNumber <<= 1;
yourNumber = yourNumber << 1;
console.log(`After <<=: ${myNumber} (${yourNumber})`);

myNumber >>= 1;
yourNumber = yourNumber >> 1;
console.log(`After >>=: ${myNumber} (${yourNumber})`);

myNumber = -1
yourNumber = -1
myNumber >>>= 1;
yourNumber = yourNumber >>> 1;
console.log(`After >>>=: ${myNumber} (${yourNumber})`);

myNumber = 1;
yourNumber = 1;
myNumber &= 3;
yourNumber = yourNumber & 3;
console.log(`After &=: ${myNumber} (${yourNumber})`);

myNumber |= 4;
yourNumber = yourNumber | 4;
console.log(`After |=: ${myNumber} (${yourNumber})`);

myNumber ^= 3;
yourNumber = yourNumber ^ 3;
console.log(`After ^=: ${myNumber} (${yourNumber})`);
