let myNumber = 1;
let yourNumber = 1;

myNumber += 1;
yourNumber = yourNumber + 1;
console.log(`After +=: ${myNumber} (${yourNumber})`);

myNumber -= 1;
yourNumber = yourNumber - 1;
console.log(`After -=: ${myNumber} (${yourNumber})`);

myNumber *= 5;
yourNumber = yourNumber * 5;
console.log(`After *=: ${myNumber} (${yourNumber})`);

myNumber /= 5;
yourNumber = yourNumber / 5;
console.log(`After /=: ${myNumber} (${yourNumber})`);

myNumber = 2;
myNumber **= 5;
yourNumber = 2;
yourNumber = yourNumber ** 5;
console.log(`After **=: ${myNumber} (${yourNumber})`);
