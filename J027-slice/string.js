const myString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lastHalf = myString.slice(13);
const fifteenToTwenty = myString.slice(15, 20);
const lastFive = myString.slice(-5);
const tenToLastFive = myString.slice(10, -5);
const fiveFromLastToNextToLast = myString.slice(-5, -1);
const fiveFromLastToTwo = myString.slice(-5, 2);
const all = myString.slice();

console.log('\nString Index Legend:');
console.log('                     1         1         2         2');
console.log(' 0         5         0         5         0         5');
console.log(` ${myString.split('').join(' ')}`);
console.log('  -2        -2        -1        -1                   ');
console.log('   5         0         5         0        -5      -1\n');

console.log(`(13):       ${lastHalf}`);
console.log(`(15, 20):   ${fifteenToTwenty}`);
console.log(`(-5):       ${lastFive}`);
console.log(`(10, -5):   ${tenToLastFive}`);
console.log(`(-5, -1):   ${fiveFromLastToNextToLast}`);
console.log(`(-5, 2):    ${fiveFromLastToTwo}`);
console.log(`():         ${all}`);

