let myNumber = 1;
let yourNumber = 0;
myNumber &&= 2;
yourNumber = yourNumber && 2;
console.log(`After &&=: ${myNumber} (${yourNumber})`);



myNumber = 1;
yourNumber = 0;
myNumber ||= 2;
yourNumber = yourNumber || 2;
console.log(`After ||=: ${myNumber} (${yourNumber})`);



myNumber = 1;
yourNumber = 0;
let otherNumber = null;
myNumber ??= 2;
yourNumber = yourNumber ?? 2;
otherNumber ??= 2;
console.log(`After ??=: ${myNumber} (${yourNumber}) - (${otherNumber})`);
