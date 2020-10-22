const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const thirdToEnd = animals.slice(3);
const thirdToSixth = animals.slice(3, 6);
const lastTwo = animals.slice(-2);
const thirdToNextToLast = animals.slice(3, -1);
const thirdFromLastToNextToLast = animals.slice(-3, -1);
const thirdFromLastToTwo = animals.slice(-3, 2);
const all = animals.slice();

console.log('\nIndex Legend:');
console.log('   0     1      2      3      4          5            6        7       8');
console.log(JSON.stringify(animals));
console.log('  -9    -8     -7     -6     -5         -4           -3       -2      -1\n');

console.log(`(3):      ${JSON.stringify(thirdToEnd)}`);
console.log(`(3, 6):   ${JSON.stringify(thirdToSixth)}`);
console.log(`(-2):     ${JSON.stringify(lastTwo)}`);
console.log(`(3, -1):  ${JSON.stringify(thirdToNextToLast)}`);
console.log(`(-3, -1): ${JSON.stringify(thirdFromLastToNextToLast)}`);
console.log(`(-3, 2):  ${JSON.stringify(thirdFromLastToTwo)}`);
console.log(`():       ${JSON.stringify(all)}`);

